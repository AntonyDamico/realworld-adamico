import { Router } from 'express';
import clientRoutes from '../modules/client/client.routes';
import articleRouter from '../modules/article/article.routes';

const routes = Router();

routes.use('/clients', clientRoutes);
routes.use('/articles', articleRouter);

export default routes;
