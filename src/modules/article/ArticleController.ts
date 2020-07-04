import { Request, Response } from 'express';
import ArticleService from './ArticleService';
import { container } from 'tsyringe';

export default class ArticleController {
  public async get(req: Request, res: Response): Promise<Response> {
    const articleService: ArticleService = container.resolve(ArticleService);
    const articles = await articleService.get();
    return res.status(201).send({ articles });
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const articleService: ArticleService = container.resolve(ArticleService);
    const articles = await articleService.create(req.body.article);
    return res.status(201).send({ articles });
  }
}
