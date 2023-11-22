import mongoose, { Document, Schema } from 'mongoose';

export interface UserDocument extends Document {
    username: string;
    password: string;
    profile_picture: string;
}

const userSchema = new Schema<UserDocument>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile_picture: { type: String },
});

const UserModel = mongoose.model<UserDocument>('User', userSchema, 'users');

export default UserModel;
