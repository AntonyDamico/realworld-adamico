import { ArticleDTO, Article } from './ArticleEntity';
import { Repository, getRepository } from 'typeorm';

export default class ArticleRepository {
  private repo: Repository<Article>;

  constructor() {
    this.repo = getRepository(Article);
  }

  public createArticle(article: ArticleDTO): Promise<Article> {
    return this.repo.save(article);
  }

  public getArticleList(): Promise<Article[]> {
    return this.repo.find();
  }
}
