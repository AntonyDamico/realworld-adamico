import { Router } from 'express';
import ClientController from './ClientController';

const clientRouter = Router();
const clientController = new ClientController();

clientRouter.get('/', clientController.get);
clientRouter.post('/', clientController.create);

export default clientRouter;
