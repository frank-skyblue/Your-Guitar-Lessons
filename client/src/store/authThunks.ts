import { createAsyncThunk } from '@reduxjs/toolkit';
import { authenticationService } from '../services/authenticationService';
import {
    loginStart,
    loginSuccess,
    loginFailure,
    logoutStart,
    logoutSuccess,
    logoutFailure
} from './authSlice';

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