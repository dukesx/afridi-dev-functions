import { Test, TestingModule } from '@nestjs/testing';
import { GeneratePlaceholderController } from './generate-placeholder.controller';

describe('GeneratePlaceholderController', () => {
  let controller: GeneratePlaceholderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneratePlaceholderController],
    }).compile();

    controller = module.get<GeneratePlaceholderController>(GeneratePlaceholderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
