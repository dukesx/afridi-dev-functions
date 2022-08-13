import { Test, TestingModule } from '@nestjs/testing';
import { UnsubService } from './unsub.service';

describe('UnsubService', () => {
  let service: UnsubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnsubService],
    }).compile();

    service = module.get<UnsubService>(UnsubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
