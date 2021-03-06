import Client from './ClientEntity';
import IClientDTO from './interfaces/IClientDTO';
import { getRepository, Repository, UpdateResult, DeleteResult } from 'typeorm';
import ICLientRepository from './interfaces/IClientRepository';

export default class ClientRepository implements ICLientRepository {
  private repo: Repository<Client>;

  constructor() {
    this.repo = getRepository(Client);
  }

  createClient(client: IClientDTO): Promise<Client> {
    return this.repo.save(client);
  }

  getClientsList(): Promise<Client[]> {
    return this.repo.find();
  }

  getClient(clientId: string): Promise<Client | undefined> {
    return this.repo.findOne({
      where: { id: clientId },
    });
  }

  public findByFields({ name, lastname }: IClientDTO): Promise<Client | undefined> {
    return this.repo.findOne({
      where: { name, lastname },
    });
  }

  updateClient(newData: Client): Promise<UpdateResult> {
    return this.repo.update({ id: newData.id }, newData);
  }

  deleteClient(clientId: string): Promise<DeleteResult> {
    return this.repo.delete({ id: clientId });
  }
}
