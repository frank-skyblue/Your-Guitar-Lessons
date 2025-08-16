import { LessonsStatusType } from "./types";

export interface Lesson {
    id: string;
    teacherId: string;
    studentIds: string[];
    date: Date;
    location: string;
    description: string;
    downloadableUrl?: string;
    status: LessonsStatusType;
}

