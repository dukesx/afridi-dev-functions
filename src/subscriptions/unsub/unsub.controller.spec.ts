import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionUnsubController } from './unsub.controller';

describe('UnsubController', () => {
  let controller: SubscriptionUnsubController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubscriptionUnsubController],
    }).compile();

    controller = module.get<SubscriptionUnsubController>(
      SubscriptionUnsubController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
