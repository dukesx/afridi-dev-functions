import { Test, TestingModule } from '@nestjs/testing';
import { UploadChatCredentialsController } from './upload-chat-credentials.controller';

describe('UploadChatCredentialsController', () => {
  let controller: UploadChatCredentialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadChatCredentialsController],
    }).compile();

    controller = module.get<UploadChatCredentialsController>(UploadChatCredentialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
