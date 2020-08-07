import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ClientService from './ClientService';

export default class ClientController {
  public async all(req: Request, res: Response): Promise<Response> {
    const clientService: ClientService = container.resolve(ClientService);
    const result = await clientService.all();
    return res.status(201).send(result);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, lastname } = req.body;
    const clientService: ClientService = container.resolve(ClientService);
    const result = await clientService.create({ name, lastname });
    return res.status(201).send({ result });
  }
}
