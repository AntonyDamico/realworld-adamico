import {
  invalidUuidMessage,
  noClientErrorMessage,
  clientExistsErrorMessage,
} from './../../shared/constants/errorMessages';
import validator from 'validator';
import { AppError } from './../../shared/errors';
import { injectable, inject } from 'tsyringe';
import Client from './ClientEntity';
import IClientDTO from './interfaces/IClientDTO';
import ICLientRepository from './interfaces/IClientRepository';

@injectable()
class ClientService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: ICLientRepository,
  ) {}

  public async all(): Promise<Client[]> {
    const result = await this.clientRepository.getClientsList();
    return result;
  }

  public async get(clientId: string): Promise<Client> {
    if (!validator.isUUID(clientId)) {
      throw new AppError({ message: invalidUuidMessage });
    }

    const client = await this.clientRepository.getClient(clientId);

    if (!client) {
      throw new AppError({ message: noClientErrorMessage });
    }

    return client;
  }

  public async create(client: IClientDTO): Promise<Client> {
    const existingClient = await this.clientRepository.findByFields(client);

    if (existingClient) {
      throw new AppError({ message: clientExistsErrorMessage });
    }

    const result = await this.clientRepository.createClient(client);
    return result;
  }
}

export default ClientService;
