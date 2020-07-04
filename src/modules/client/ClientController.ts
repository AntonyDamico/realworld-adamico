import ClientRepository from './ClientRepository';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ClientController {
    public async get(req: Request, res: Response): Promise<Response> {
        const clientRepository: ClientRepository = container.resolve('ClientRepository');
        const result = await clientRepository.getClientsList();
        return res.status(201).send(result);
    }
}
