import { AppError } from './../../shared/errors';
import { injectable, inject } from 'tsyringe';
import ClientRepository from './ClientRepository';
import { Client, ClientDTO } from './ClientEntity';

@injectable()
class ClientService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: ClientRepository,
  ) {}

  public async get(): Promise<Client[]> {
    const result = await this.clientRepository.getClientsList();
    return result;
  }

  public async create(client: ClientDTO): Promise<Client> {
    const existingClient = await this.clientRepository.findByFields(client);

    if (existingClient) {
      throw new AppError({ message: 'The client already exists' });
    }

    const result = await this.clientRepository.createClient(client);
    return result;
  }
}

export default ClientService;
