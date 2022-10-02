import { Test, TestingModule } from '@nestjs/testing';
import { GenerateScreenshotController } from './generate-screenshot.controller';

describe('GenerateScreenshotController', () => {
  let controller: GenerateScreenshotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenerateScreenshotController],
    }).compile();

    controller = module.get<GenerateScreenshotController>(GenerateScreenshotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
