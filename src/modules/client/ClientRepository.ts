import { Client } from './ClientEntity';
import { getRepository, Repository, UpdateResult, DeleteResult } from 'typeorm';

export default class ClientRepository {
    private repo: Repository<Client>;

    constructor() {
        this.repo = getRepository(Client);
    }

    createClient(client: Client): Promise<Client> {
        return this.repo.save(client);
    }

    async getClientsList(): Promise<Client[]> {
        return this.repo.find();
    }

    getClient(clientId: string): Promise<Client> {
        return this.repo.findOne({
            where: { id: clientId },
        });
    }

    updateClient(clientId: string, newData: Client): Promise<UpdateResult> {
        return this.repo.update({ id: clientId }, newData);
    }

    deleteClient(clientId: string): Promise<DeleteResult> {
        return this.repo.delete({ id: clientId });
    }
}
