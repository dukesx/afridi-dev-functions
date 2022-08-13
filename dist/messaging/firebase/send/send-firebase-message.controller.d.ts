import { Request } from 'express';
import { SendFirebaseMessagingService } from './send-firebase-message.service';
export declare class SendFirebaseMessageController {
    private readonly getFirebaseMessageSendingService;
    constructor(getFirebaseMessageSendingService: SendFirebaseMessagingService);
    messageSendingController(request: Request): Promise<string>;
}
