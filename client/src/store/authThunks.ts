import { createAsyncThunk } from '@reduxjs/toolkit';
import { authenticationService } from '../services/authenticationService';
import {
    initializeStart,
    initializeSuccess,
    initializeFailure,
    loginStart,
    loginSuccess,
    loginFailure,
    logoutStart,
    logoutSuccess,
    logoutFailure,
} from './authSlice';
import { getStoredToken, removeStoredToken } from '../util/helpers';

// JWT token parsing utility
const parseJWTToken = (token: string) => {
    try {
        // Split the token and decode the payload (middle part)
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );

        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error('Error parsing JWT token:', error);
        return null;
    }
};

const isTokenValid = (token: string): boolean => {
    try {
        const payload = parseJWTToken(token);
        if (!payload) return false;

        const currentTime = Date.now() / 1000;
        return payload.exp > currentTime;
    } catch {
        return false;
    }
};

export const initializeAuthAsync = createAsyncThunk(
    'auth/initialize',
    async (_, { dispatch }) => {
        dispatch(initializeStart());
        const token = getStoredToken();

        if (!token || !isTokenValid(token)) {
            removeStoredToken();
            dispatch(initializeFailure('No Token Found'));
            throw new Error('No Token Found');
        }

        try {
            const tokenPayload = parseJWTToken(token);

            if (!tokenPayload) {
                removeStoredToken();
                dispatch(initializeFailure('Invalid token format'));
                throw new Error('Invalid token format');
            }

            const user = {
                id: tokenPayload.id,
                email: tokenPayload.email,
                name: tokenPayload.name,
            };

            dispatch(initializeSuccess({ token, user }));
        } catch (error) {
            removeStoredToken();
            dispatch(initializeFailure('Token parsing failed'));
            throw error;
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials: { email: string; password: string }, { dispatch }) => {
        dispatch(loginStart());

        try {
            const response = await authenticationService.login(credentials);

            if (response.success && response.token && response.user) {
                dispatch(loginSuccess({ token: response.token, user: response.user }));
                return response;
            } else {
                dispatch(loginFailure(response.message || 'Login failed'));
                throw new Error(response.message || 'Login failed');
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Login failed';
            dispatch(loginFailure(errorMessage));
            throw error;
        }
    }
);

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, { dispatch }) => {
        dispatch(logoutStart());

        try {
            const response = await authenticationService.logout();
            dispatch(logoutSuccess());
            return response;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Logout failed';
            dispatch(logoutFailure(errorMessage));
            throw error;
        }
    }
);

export const registerUser = createAsyncThunk(
    'auth/register',
    async (credentials: { email: string; password: string; name?: string }, { dispatch }) => {
        dispatch(loginStart());
        try {
            const response = await authenticationService.register(credentials);
            if (response.success && response.token && response.user) {
                dispatch(loginSuccess({ token: response.token, user: response.user }));
                return response;
            } else {
                dispatch(loginFailure(response.message || 'Registration failed'));
                throw new Error(response.message || 'Registration failed');
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Registration failed';
            dispatch(loginFailure(errorMessage));
            throw error;
        }
    }
); 