import { Test, TestingModule } from '@nestjs/testing';
import { Binary } from './binary';

describe('Binary', () => {
  let service: Binary;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Binary],
    }).compile();

    service = module.get<Binary>(Binary);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
