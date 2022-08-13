import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { getMessaging, Message } from 'firebase-admin/messaging';

@Injectable()
export class SendFirebaseMessagingService {
  async sendFirebaseMessage(request: Request) {
    const { token, message, title } = request.body;
    console.log(token);
    console.log(message);
    const sendableMessage: Message = {
      notification: {
        body: message,
        title: title,
      },
      token: token,
    };

    // Send a message to the device corresponding to the provided
    // registration token.
    const data = await getMessaging().send(sendableMessage);

    if (data) {
      console.log('Successfully sent message:', data);
      return JSON.stringify({
        success: true,
      });
    }
  }
}
