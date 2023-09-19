import { Router } from 'express';
import citiesRouter from './CitiesRouter.js';
import itinerariesRouter from './itinerariesRouter.js';


const indexRouter = Router();

indexRouter.get('/', (req, res, next) => {
  res.send('Welcome /api');
});

indexRouter.use('/cities', citiesRouter)
indexRouter.use("/itineraries", itinerariesRouter);



export default indexRouter;