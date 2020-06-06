import { Client } from './../entities/Client';
import { getRepository, Repository, UpdateResult, DeleteResult } from 'typeorm';

export class ClientRepo {
    private repo: Repository<Client>;

    constructor() {
        this.repo = getRepository(Client);
    }

    createClient(client: Client): Promise<Client> {
        console.log(client);
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

    updateClient(clientId: string, newData: Client): Promise<UpdateResult> {
        return this.repo.update({ id: clientId }, newData);
    }

    deleteClient(clientId: string): Promise<DeleteResult> {
        return this.repo.delete({ id: clientId });
    }
}
