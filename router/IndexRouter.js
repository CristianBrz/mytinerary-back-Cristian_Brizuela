import { Router } from 'express';
import citiesRouter from './CitiesRouter.js';

const indexRouter = Router();

indexRouter.get('/', (request, response, next) => {
  response.send('Welcome to the jungle en /api');
});

indexRouter.use('/cities', citiesRouter)



export default indexRouter;