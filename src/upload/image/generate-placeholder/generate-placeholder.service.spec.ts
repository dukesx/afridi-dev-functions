import { Test, TestingModule } from '@nestjs/testing';
import { GeneratePlaceholderService } from './generate-placeholder.service';

describe('GeneratePlaceholderService', () => {
  let service: GeneratePlaceholderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneratePlaceholderService],
    }).compile();

    service = module.get<GeneratePlaceholderService>(GeneratePlaceholderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
