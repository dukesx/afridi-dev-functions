import { Request } from 'express';
export declare class SendFirebaseMessagingService {
    sendFirebaseMessage(request: Request): Promise<string>;
}
