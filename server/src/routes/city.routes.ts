import { Router } from 'express';
import * as CityController from '../controllers/city.controller';

const cityRouter = Router();

cityRouter.get('/get-cities', CityController.getCities);

export default cityRouter;
