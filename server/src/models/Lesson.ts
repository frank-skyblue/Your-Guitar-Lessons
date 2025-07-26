import mongoose, { Document, Schema, Types } from 'mongoose';

type ModalType = "past" | "booked" | "available" | "";

export interface ILesson extends Document {
    teacherId: Types.ObjectId;
    studentIds: Types.ObjectId[];
    date: string; // ISO date string
    time: string; // e.g. "15:00"
    location: string;
    description: string;
    downloadableUrl?: string;
    status: ModalType;
}

const LessonSchema: Schema<ILesson> = new Schema({
    teacherId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    studentIds: [{ type: Schema.Types.ObjectId, ref: 'User', required: true, index: true }],
    date: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    downloadableUrl: { type: String },
    status: { type: String, enum: ['past', 'booked', 'available', ''], default: 'booked' },
});

export const Lesson = mongoose.model<ILesson>('Lesson', LessonSchema); 