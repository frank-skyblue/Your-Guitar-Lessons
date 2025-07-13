import mongoose, { Document, Schema, Types } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
    email: string;
    password: string;
    name?: string;
    _id: Types.ObjectId;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema: Schema<IUser> = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    name: { type: String }
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err as any);
    }
});

UserSchema.methods.comparePassword = async function (candidatePassword: string) {
    return bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.model<IUser>('User', UserSchema); 