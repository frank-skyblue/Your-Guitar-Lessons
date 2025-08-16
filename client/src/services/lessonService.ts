import { Lesson } from "../models/interfaces"

export interface LessonResponse {
    success: boolean;
    message: string;
    data: Lesson[];
}

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

export const lessonService = {
    getLessonsByStudentId: async (studentId: string, token: string): Promise<LessonResponse> => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/lessons/student/${studentId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            });

            const lessonResponse = await response.json() as LessonResponse;
            return lessonResponse;
        } catch (error) {
            return {
                success: false,
                message: "Network error occurred",
                data: []
            };
        }
    },
};