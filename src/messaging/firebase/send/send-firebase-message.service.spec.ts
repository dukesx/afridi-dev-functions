import { Test, TestingModule } from '@nestjs/testing';
import { SendFirebaseMessagingService } from './send-firebase-message.service';

describe('SendMessageService', () => {
  let service: SendFirebaseMessagingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendFirebaseMessagingService],
    }).compile();

    service = module.get<SendFirebaseMessagingService>(
      SendFirebaseMessagingService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
