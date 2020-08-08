import 'reflect-metadata';
import { v4 as uuidv4 } from 'uuid';
import {
  invalidUuidMessage,
  noClientErrorMessage,
  clientExistsErrorMessage,
} from './../../../shared/constants/errorMessages';
import { AppError } from './../../../shared/errors';
import ClientService from '../ClientService';
import FakeClientRepository from './fakes/FakeClientRepository';
import Client from '../ClientEntity';
import IClientDTO from '../interfaces/IClientDTO';

let fakeClientRepository: FakeClientRepository;
let clientService: ClientService;
let createdClientData: IClientDTO;
let createdClient: Client;

describe('ClientService tests', () => {
  beforeEach(async () => {
    fakeClientRepository = new FakeClientRepository();
    clientService = new ClientService(fakeClientRepository);
    createdClientData = { name: 'test', lastname: 'client' };
    createdClient = await fakeClientRepository.createClient(createdClientData);
  });

  describe('all', () => {
    it('should return all the employees', async () => {
      const createdClient2 = await fakeClientRepository.createClient({ name: 'test2', lastname: 'client2' });
      const clientLists = await clientService.all();
      expect(clientLists).toEqual([createdClient, createdClient2]);
    });
  });

  describe('get', () => {
    it('should return the client data', async () => {
      const clientId = createdClient.id;
      const clientData = await clientService.get(clientId);
      expect(createdClient).toEqual(clientData);
    });

    it('should not be able to get a client with an invalid uuid', async () => {
      const badUuid = '1234';
      const badUuidAppError = new AppError({ message: invalidUuidMessage });
      await expect(clientService.get(badUuid)).rejects.toBeInstanceOf(AppError);
      await expect(clientService.get(badUuid)).rejects.toEqual(badUuidAppError);
    });

    it('should give an error when the client does not exist', async () => {
      const validUuid = uuidv4();
      const noClientError = new AppError({ message: noClientErrorMessage });
      await expect(clientService.get(validUuid)).rejects.toBeInstanceOf(AppError);
      await expect(clientService.get(validUuid)).rejects.toEqual(noClientError);
    });
  });

  describe('create', () => {
    it('should create a new client', async () => {
      const newClient: IClientDTO = { name: 'new', lastname: 'client' };
      const localCreatedClient = await clientService.create(newClient);
      expect(localCreatedClient).toHaveProperty('id');
      newClient.id = localCreatedClient.id;
      expect(localCreatedClient).toEqual(newClient);
    });

    it('should give an error if the client already exists', async () => {
      const clientExistsError = new AppError({ message: clientExistsErrorMessage });
      await expect(clientService.create(createdClientData)).rejects.toBeInstanceOf(AppError);
      await expect(clientService.create(createdClientData)).rejects.toEqual(clientExistsError);
    });
  });
});
