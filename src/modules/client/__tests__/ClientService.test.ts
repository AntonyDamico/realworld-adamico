import ClientService from '../ClientService';
import FakeClientRepository from './fakes/FakeClientRepository';

let fakeClientRepository: FakeClientRepository;
let clientService: ClientService;

describe('ClientService tests', () => {
  // beforeEach(() => {
  //   fakeClientRepository = new FakeClientRepository();
  //   clientService = new ClientService(fakeClientRepository);
  // });

  it('should work', () => {
    expect(true).toBe(true);
  });
});
