import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ClientService from './ClientService';

export default class ClientController {
  public async get(req: Request, res: Response): Promise<Response> {
    const clientService: ClientService = container.resolve(ClientService);
    const result = await clientService.get();
    return res.status(201).send(result);
  }
}
