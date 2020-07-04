import { injectable, inject } from 'tsyringe';
import ClientRepository from './ClientRepository';
import { Client } from './ClientEntity';

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
}

export default ClientService;
