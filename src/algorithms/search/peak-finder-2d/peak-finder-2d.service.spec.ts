import { Test, TestingModule } from '@nestjs/testing';
import { PeakFinder2dService } from './peak-finder-2d.service';

describe('PeakFinder2dService', () => {
  let service: PeakFinder2dService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeakFinder2dService],
    }).compile();

    service = module.get<PeakFinder2dService>(PeakFinder2dService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
