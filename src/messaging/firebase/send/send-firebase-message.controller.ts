import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { SendFirebaseMessagingService } from './send-firebase-message.service';

@Controller('send/message')
export class SendFirebaseMessageController {
  constructor(
    private readonly getFirebaseMessageSendingService: SendFirebaseMessagingService,
  ) {}
  @Post()
  messageSendingController(@Req() request: Request) {
    return this.getFirebaseMessageSendingService.sendFirebaseMessage(request);
  }
}
