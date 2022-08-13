import { Module } from '@nestjs/common';
import { SendFirebaseMessageController } from './send-firebase-message.controller';
import { SendFirebaseMessagingService } from './send-firebase-message.service';

@Module({
  providers: [SendFirebaseMessagingService],
  controllers: [SendFirebaseMessageController],
})
export class SendFirebaseMessageModule {}
