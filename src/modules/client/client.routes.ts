import { Router } from 'express';
import ClientController from './ClientController';
import { celebrate, Segments, Joi } from 'celebrate';

const clientRouter = Router();
const clientController = new ClientController();

clientRouter.get('/', clientController.all);

clientRouter.get('/:id', celebrate({ [Segments.BODY]: { id: Joi.string().required() } }), clientController.get);

clientRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      lastname: Joi.string().required(),
    },
  }),
  clientController.create,
);

export default clientRouter;
