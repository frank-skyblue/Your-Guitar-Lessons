import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import lessonReducer from './lessonSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        lessons: lessonReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 