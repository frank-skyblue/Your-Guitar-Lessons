import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    setLessonsStart,
    setLessonsSuccess,
    setLessonsFailure
} from './lessonSlice';
import { lessonService } from '../services/lessonService';

export const getLessons = createAsyncThunk(
    'lessons/get',
    async (studentId: string, { dispatch }) => {
        dispatch(setLessonsStart());

        try {
            const response = await lessonService.getLessonsByStudentId(studentId);

            if (response.success && response.data) {
                dispatch(setLessonsSuccess(response.data));
                return response;
            } else {
                dispatch(setLessonsFailure(response.message || 'Login failed'));
                throw new Error(response.message || 'Login failed');
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Login failed';
            dispatch(setLessonsFailure(errorMessage));
            throw error;
        }
    }
);