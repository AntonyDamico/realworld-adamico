import { ClientRepository } from './ClientRepository';
import { Request, Response } from 'express';

export default class ClientController {
    private clientRepository: ClientRepository;

    constructor() {
        this.clientRepository = new ClientRepository();
    }

    public async get(req: Request, res: Response): Promise<Response> {
        const result = await this.clientRepository.getClientsList();
        return res.status(201).send(result);
    }
}
