import { Article, ArticleDTO } from './ArticleEntity';
import { injectable, inject } from 'tsyringe';
import ArticleRepository from './ArticleRepository';

@injectable()
export default class ArticleService {
  constructor(
    @inject('ArticleRepository')
    private articleRepository: ArticleRepository,
  ) {}

  public async get(): Promise<Article[]> {
    const articles = await this.articleRepository.getArticleList();
    return articles;
  }

  public async create(article: ArticleDTO): Promise<Article> {
    if (!('slug' in article)) article.slug = this.getSlug(article.title);
    const createdArticle = await this.articleRepository.createArticle(article);
    return createdArticle;
  }

  public getSlug(text: string): string {
    const dashtitle = text.toLocaleLowerCase().replace(/ /g, '-');
    const number = Math.floor(Math.random() * 1000);
    return `${dashtitle}-${number}`;
  }
}
