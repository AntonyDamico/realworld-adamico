import ClientRepository from '../modules/client/ClientRepository';
import { container } from 'tsyringe';

container.registerSingleton<ClientRepository>('ClientRepository', ClientRepository);
