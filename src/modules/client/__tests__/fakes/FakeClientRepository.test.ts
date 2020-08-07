import IClientDTO from '../../interfaces/IClientDTO';
import FakeClientRepository from './FakeClientRepository';
import Client from '../../ClientEntity';
import { example } from 'joi';

let fakeClientRepository: FakeClientRepository;
let exampleClient: IClientDTO;
let createdClient: Client;

describe('FakeClientRepository tests', () => {
  beforeEach(async () => {
    fakeClientRepository = new FakeClientRepository();
    exampleClient = { name: 'test', lastname: 'client' };
    createdClient = await fakeClientRepository.createClient(exampleClient);
  });

  describe('createClient', () => {
    it('should create a new client', async () => {
      const localCreatedClient = await fakeClientRepository.createClient(exampleClient);
      expect(localCreatedClient).toHaveProperty('id');
      exampleClient.id = localCreatedClient.id;
      expect(fakeClientRepository.clients).toContainEqual(exampleClient);
    });
  });

  describe('getClientsList', () => {
    it('should return a list with the', async () => {
      const clientList = await fakeClientRepository.getClientsList();
      expect(clientList).toEqual([createdClient]);
    });
  });

  describe('getClient', () => {
    it('should return the client data', async () => {
      const clientData = await fakeClientRepository.getClient(createdClient.id);
      expect(clientData).toEqual(createdClient);
    });
  });

  describe('findByFields', () => {
    it('should return the client data using the fields', async () => {
      const clientData = await fakeClientRepository.findByFields(exampleClient);
      expect(clientData).toEqual(createdClient);
    });
  });

  describe('updateClient', () => {
    it('should update the employee', async () => {
      expect(fakeClientRepository.clients).toContainEqual(createdClient);
      const updatedData = { id: createdClient.id, name: 'updated', lastname: 'value' };
      await fakeClientRepository.updateClient(updatedData);
      expect(fakeClientRepository.clients).toContainEqual(updatedData);
    });
  });

  describe('deleteClient', () => {
    it('should delete the employee', async () => {
      expect(fakeClientRepository.clients).toContainEqual(createdClient);
      await fakeClientRepository.deleteClient(createdClient.id);
      expect(fakeClientRepository.clients).not.toContainEqual(createdClient);
    });
  });
});
