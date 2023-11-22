import { Request, Response } from 'express';
import UserModel from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ msg: 'Имя пользователя и пароль обязательны для регистрации.' });
        }

        const existingUser = await UserModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ msg: 'Пользователь с таким именем уже существует.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new UserModel({
            username,
            password: hashedPassword,
            profile_picture: '../assets/default_pfp.jpg',
        });

        await user.save();

        return res.status(201).json({ msg: 'User registred successfully.' });
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ msg: 'Имя пользователя и пароль обязательны для регистрации.' });
        }

        const existingUser = await UserModel.findOne({ username });
        if (!existingUser) {
            return res.status(400).json({ msg: 'Пользователя с таким именем не существует.' });
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Неверны данные.' });
        }

        const token = jwt.sign({ id: existingUser._id, username: existingUser.username }, process.env.JWT_SECRET);

        return res.status(201).json({ token, id: existingUser._id });
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
