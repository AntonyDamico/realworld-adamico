import { Router } from 'express';
import ClientController from './ClientController';

const clientRouter = Router();
const clientController = new ClientController();

clientRouter.get('/', clientController.get);

export default clientRouter;
