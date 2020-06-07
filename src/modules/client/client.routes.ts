import { Router } from 'express';
import ClientController from './ClientController';
import { ClientRepository } from './ClientRepository';

const clientRouter = Router();
// const clientController = new ClientController();

// clientRouter.get('/', clientController.get);

clientRouter.get('/', (req, res) => {
    // const clientRepo = new ClientRepository();
    const clientController = new ClientController();
    clientController.get(req, res);
    // clientRepo.getClientsList().then((result) => res.send(result));
});

export default clientRouter;
