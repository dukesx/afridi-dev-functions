import { Module } from '@nestjs/common';
import { SubscriptionUnsubController } from './unsub.controller';
import { SubscriptionUnsubService } from './unsub.service';

@Module({
  providers: [SubscriptionUnsubService],
  controllers: [SubscriptionUnsubController],
})
export class SubscriptionUnsubModule {}
