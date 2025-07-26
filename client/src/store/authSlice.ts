import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { removeStoredToken, setStoredToken } from '../util/helpers';

interface AuthState {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: {
        id?: string;
        email?: string;
        name?: string;
    } | null;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    isLoading: false,
    user: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess: (state, action: PayloadAction<{ token: string; user: { id: string; email: string; name?: string } }>) => {
            state.isAuthenticated = true;
            state.isLoading = false;
            state.user = action.payload.user;
            state.error = null;
            // Store token in localStorage
            setStoredToken(action.payload.token)
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.isAuthenticated = false;
            state.isLoading = false;
            state.user = null;
            state.error = action.payload;
        },
        logoutStart: (state) => {
            state.isLoading = true;
        },
        logoutSuccess: (state) => {
            state.isAuthenticated = false;
            state.isLoading = false;
            state.user = null;
            state.error = null;
            // Remove token from localStorage
            removeStoredToken();
        },
        logoutFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
            // Still remove token from localStorage even if API fails
            removeStoredToken();
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    logoutStart,
    logoutSuccess,
    logoutFailure,
    clearError,
} = authSlice.actions;

export default authSlice.reducer; 