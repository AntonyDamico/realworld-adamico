import { Client, ClientDTO } from './ClientEntity';
import { getRepository, Repository, UpdateResult, DeleteResult } from 'typeorm';

export default class ClientRepository {
  private repo: Repository<Client>;

  constructor() {
    this.repo = getRepository(Client);
  }

  createClient(client: ClientDTO): Promise<Client> {
    return this.repo.save(client);
  }

  getClientsList(): Promise<Client[]> {
    return this.repo.find();
  }

  getClient(clientId: string): Promise<Client> {
    return this.repo.findOne({
      where: { id: clientId },
    });
  }

  public findByFields({ name, lastname }: ClientDTO): Promise<Client | undefined> {
    return this.repo.findOne({
      where: { name, lastname },
    });
  }

  updateClient(clientId: string, newData: Client): Promise<UpdateResult> {
    return this.repo.update({ id: clientId }, newData);
  }

  deleteClient(clientId: string): Promise<DeleteResult> {
    return this.repo.delete({ id: clientId });
  }
}
