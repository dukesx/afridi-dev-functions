import { Test, TestingModule } from '@nestjs/testing';
import { GenerateTokenController } from './generate-token.controller';

describe('GenerateTokenController', () => {
  let controller: GenerateTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenerateTokenController],
    }).compile();

    controller = module.get<GenerateTokenController>(GenerateTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
