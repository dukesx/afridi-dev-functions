import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { StreamChat } from 'stream-chat';
@Injectable()
export class GenerateTokenService {
  async generateTokenService(req: Request) {
    const { userID } = req.body;
    const serverClient = StreamChat.getInstance(
      'gd2u6sewfhqu',
      'd2ntq3qr8b7qrrjusrpkx9g85gbzuxe7xmx2968w2d43pbw4pqgmxuapjn6u3cn2',
    );

    // generate a token for the user with id 'john'
    const token = serverClient.createToken(userID);
    return JSON.stringify({
      token: token,
    });
  }
}
