import { Lesson } from "../util/types";

export interface LessonResponse {
    success: boolean;
    message: string;
    data: Lesson[];
}

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

export const lessonService = {
    getLessonsByStudentId: async (studentId: string): Promise<LessonResponse> => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/lessons/student/${studentId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            return data;
        } catch (error) {
            return {
                success: false,
                message: "Network error occurred",
                data: []
            };
        }
    },
};