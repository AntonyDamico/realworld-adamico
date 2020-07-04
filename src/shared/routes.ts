import { Router } from 'express';
import clientRoutes from '../modules/client/client.routes';

const routes = Router();

routes.use('/clients', clientRoutes);

export default routes;
