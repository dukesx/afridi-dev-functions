import { Test, TestingModule } from '@nestjs/testing';
import { DeleteVideoController } from './delete-video.controller';

describe('DeleteVideoController', () => {
  let controller: DeleteVideoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteVideoController],
    }).compile();

    controller = module.get<DeleteVideoController>(DeleteVideoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
