import { Router } from 'express';
import ArticleController from './ArticleController';
import { celebrate, Segments, Joi } from 'celebrate';

const articleRouter = Router();
const articleController = new ArticleController();

articleRouter.get('/', articleController.get);
articleRouter.post('/', articleController.create);

export default articleRouter;
