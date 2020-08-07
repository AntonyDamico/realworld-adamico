import IClientDTO from '../../interfaces/IClientDTO';
import FakeClientRepository from './FakeClientRepository';
import Client from '../../ClientEntity';

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
});
