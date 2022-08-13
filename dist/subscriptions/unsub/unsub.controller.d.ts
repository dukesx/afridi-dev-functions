import { Request } from 'express';
import { SubscriptionUnsubService } from './unsub.service';
export declare class SubscriptionUnsubController {
    private readonly getSubscriptionUnsubService;
    constructor(getSubscriptionUnsubService: SubscriptionUnsubService);
    unsubSendingController(request: Request): Promise<string>;
}
