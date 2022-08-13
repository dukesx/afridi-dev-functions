import { Test, TestingModule } from '@nestjs/testing';
import { UploadChatCredentialsService } from './upload-chat-credentials.service';

describe('UploadChatCredentialsService', () => {
  let service: UploadChatCredentialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadChatCredentialsService],
    }).compile();

    service = module.get<UploadChatCredentialsService>(UploadChatCredentialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
