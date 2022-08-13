import { Test, TestingModule } from '@nestjs/testing';
import { DeleteVideoService } from './delete-video.service';

describe('DeleteVideoService', () => {
  let service: DeleteVideoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteVideoService],
    }).compile();

    service = module.get<DeleteVideoService>(DeleteVideoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
