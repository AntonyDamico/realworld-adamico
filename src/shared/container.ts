import { container } from 'tsyringe';
import ClientRepository from '../modules/client/ClientRepository';
import ArticleRepository from '../modules/article/ArticleRepository';

container.registerSingleton<ClientRepository>('ClientRepository', ClientRepository);
container.registerSingleton<ArticleRepository>('ArticleRepository', ArticleRepository);
