import { UpdateResult, DeleteResult } from 'typeorm';
import Client from '../ClientEntity';
import IClientDTO from './IClientDTO';

export default interface ICLientRepository {
  createClient(client: IClientDTO): Promise<Client>;
  getClientsList(): Promise<Client[]>;
  getClient(clientId: string): Promise<Client | undefined>;
  findByFields({ name, lastname }: IClientDTO): Promise<Client | undefined>;
  updateClient(newData: Client): Promise<UpdateResult | undefined>;
  deleteClient(clientId: string): Promise<DeleteResult | undefined>;
}
