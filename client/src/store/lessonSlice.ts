import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Lesson } from '../util/types';

interface LessonState {
    lessons: Lesson[];
    isLoading: boolean;
    error: string | null;
}

const initialState: LessonState = {
    lessons: [],
    isLoading: false,
    error: null,
};

const lessonSlice = createSlice({
    name: 'lessons',
    initialState,
    reducers: {
        setLessonsStart: (state) => {
            state.isLoading = true;
        },
        setLessonsSuccess: (state, action: PayloadAction<Lesson[]>) => {
            state.lessons = action.payload;
            state.isLoading = false;
        },
        setLessonsFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        addLesson: (state, action: PayloadAction<Lesson>) => {
            state.lessons.push(action.payload);
        },
        removeLesson: (state, action: PayloadAction<string>) => {
            state.lessons = state.lessons.filter(lesson => lesson.id !== action.payload);
        },
        updateLesson: (state, action: PayloadAction<Lesson>) => {
            const index = state.lessons.findIndex(lesson => lesson.id === action.payload.id);
            if (index !== -1) {
                state.lessons[index] = action.payload;
            }
        },
    },
});

export const { setLessonsStart, setLessonsSuccess, setLessonsFailure, addLesson, removeLesson, updateLesson } = lessonSlice.actions;
export default lessonSlice.reducer; 