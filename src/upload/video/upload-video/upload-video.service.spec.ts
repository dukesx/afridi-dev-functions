import { Test, TestingModule } from '@nestjs/testing';
import { UploadVideoService } from './upload-video.service';

describe('UploadVideoService', () => {
  let service: UploadVideoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadVideoService],
    }).compile();

    service = module.get<UploadVideoService>(UploadVideoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
