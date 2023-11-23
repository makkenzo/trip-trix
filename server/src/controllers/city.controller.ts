import { Request, Response } from 'express';
import CityModel from '../models/city.model';

export const getCities = async (req: Request, res: Response) => {
    try {
        const cities = await CityModel.find();

        return res.status(201).json(cities);
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
