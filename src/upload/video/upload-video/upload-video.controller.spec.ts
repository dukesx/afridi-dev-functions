import { Test, TestingModule } from '@nestjs/testing';
import { UploadVideoController } from './upload-video.controller';

describe('UploadVideoController', () => {
  let controller: UploadVideoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadVideoController],
    }).compile();

    controller = module.get<UploadVideoController>(UploadVideoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
