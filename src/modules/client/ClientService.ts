import { injectable, inject } from 'tsyringe';
import ClientRepository from './ClientRepository';
import { Client } from './ClientEntity';

interface ICreateClientRequest {
  name: string;
  lastname: string;
}

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

  public async create(client: ICreateClientRequest): Promise<Client> {
    const result = await this.clientRepository.createClient(client);
    return result;
  }
}

export default ClientService;
