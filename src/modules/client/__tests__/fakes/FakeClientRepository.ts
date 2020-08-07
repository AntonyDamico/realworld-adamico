import { UpdateResult, DeleteResult, ObjectLiteral } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import Client from '../../ClientEntity';
import IClientDTO from '../../interfaces/IClientDTO';
import IClientRepository from '../../interfaces/IClientRepository';

// class FakeClientRepository implements IClientRepository {
class FakeClientRepository {
  public clients: Client[] = [];

  public async createClient({ name, lastname }: IClientDTO): Promise<Client> {
    const client = new Client();
    Object.assign(client, { id: uuidv4(), name, lastname });
    this.clients.push(client);
    return client;
  }

  public async getClientsList(): Promise<Client[]> {
    return this.clients;
  }

  public async getClient(clientId: string): Promise<Client | undefined> {
    const clientData = this.clients.find((client) => client.id === clientId);
    return clientData;
  }

  public async findByFields({ name, lastname }: IClientDTO): Promise<Client | undefined> {
    const clientData = this.clients.find((client) => client.name === name && client.lastname === lastname);
    return clientData;
  }

  public async updateClient({ id, name, lastname }: Client): Promise<UpdateResult | undefined> {
    const clientData = await this.getClient(id);
    if (!clientData) return undefined;
    clientData.name = name;
    clientData.lastname = lastname;
    return undefined;
  }

  public async deleteClient(clientId: string): Promise<DeleteResult | undefined> {
    this.clients = this.clients.filter((client) => client.id !== clientId);
    return undefined;
  }
}

export default FakeClientRepository;
