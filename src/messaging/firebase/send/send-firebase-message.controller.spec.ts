import { Test, TestingModule } from '@nestjs/testing';
import { SendFirebaseMessageController } from './send-firebase-message.controller';

describe('/send/message', () => {
  let controller: SendFirebaseMessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendFirebaseMessageController],
    }).compile();

    controller = module.get<SendFirebaseMessageController>(
      SendFirebaseMessageController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
