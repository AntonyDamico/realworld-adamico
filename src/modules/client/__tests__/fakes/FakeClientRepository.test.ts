import IClientDTO from '../../interfaces/IClientDTO';
import FakeClientRepository from './FakeClientRepository';

let fakeClientRepository: FakeClientRepository;

describe('FakeClientRepository tests', () => {
  beforeEach(() => {
    fakeClientRepository = new FakeClientRepository();
  });

  describe('createClient', () => {
    it('should create a new client', async () => {
      const newClient: IClientDTO = { name: 'test', lastname: 'client' };
      const createdClient = await fakeClientRepository.createClient(newClient);
      expect(createdClient).toHaveProperty('id');
      newClient.id = createdClient.id;
      expect(fakeClientRepository.clients).toContainEqual(newClient);
    });
  });
});
