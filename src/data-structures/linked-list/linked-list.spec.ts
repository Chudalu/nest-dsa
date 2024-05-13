import { Test, TestingModule } from '@nestjs/testing';
import { LinkedList } from './linked-list';

describe('LinkedList', () => {
  let service: LinkedList;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinkedList],
    }).compile();

    service = module.get<LinkedList>(LinkedList);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
