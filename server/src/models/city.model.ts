import mongoose, { Document, Schema } from 'mongoose';

export interface CityDocument extends Document {
    city: string;
    country: string;
    airport_code: string;
}

const citySchema = new Schema<CityDocument>({
    city: { type: String, required: true },
    country: { type: String, required: true },
    airport_code: { type: String, required: true },
});

const CityModel = mongoose.model<CityDocument>('City', citySchema, 'cities');

export default CityModel;
