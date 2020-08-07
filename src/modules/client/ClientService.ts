import validator from 'validator';
import { AppError } from './../../shared/errors';
import { injectable, inject } from 'tsyringe';
import ClientRepository from './ClientRepository';
import Client from './ClientEntity';
import IClientDTO from './interfaces/IClientDTO';

@injectable()
class ClientService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: ClientRepository,
  ) {}

  public async all(): Promise<Client[]> {
    const result = await this.clientRepository.getClientsList();
    return result;
  }

  public async get(clientId: string): Promise<Client> {
    if (!validator.isUUID(clientId)) {
      throw new AppError({ message: 'The id is not a valid UUID' });
    }

    const client = await this.clientRepository.getClient(clientId);

    if (!client) {
      throw new AppError({ message: 'The client does not exist' });
    }

    return client;
  }

  public async create(client: IClientDTO): Promise<Client> {
    const existingClient = await this.clientRepository.findByFields(client);

    if (existingClient) {
      throw new AppError({ message: 'The client already exists' });
    }

    const result = await this.clientRepository.createClient(client);
    return result;
  }
}

export default ClientService;
