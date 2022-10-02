import { Test, TestingModule } from '@nestjs/testing';
import { GenerateScreenshotService } from './generate-screenshot.service';

describe('GenerateScreenshotService', () => {
  let service: GenerateScreenshotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateScreenshotService],
    }).compile();

    service = module.get<GenerateScreenshotService>(GenerateScreenshotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
