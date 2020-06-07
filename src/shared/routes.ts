import { Router } from 'express';
import clientRoutes from '../modules/client/client.routes';

const routes = Router();

routes.use('/customer', clientRoutes);

export default routes;
