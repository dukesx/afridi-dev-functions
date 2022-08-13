import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { SubscriptionUnsubService } from './unsub.service';

@Controller('/subscriptions/unsub')
export class SubscriptionUnsubController {
  constructor(
    private readonly getSubscriptionUnsubService: SubscriptionUnsubService,
  ) {}

  @Post()
  unsubSendingController(@Req() request: Request) {
    return this.getSubscriptionUnsubService.unsubSubscription(request);
  }
}
