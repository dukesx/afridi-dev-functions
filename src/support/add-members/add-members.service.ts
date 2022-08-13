import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { StreamChat } from 'stream-chat';
@Injectable()
export class AddMembersService {
  async getAddMemberService(req: Request) {
    const { userID, role } = req.body;
    const serverClient = StreamChat.getInstance(
      'gd2u6sewfhqu',
      'd2ntq3qr8b7qrrjusrpkx9g85gbzuxe7xmx2968w2d43pbw4pqgmxuapjn6u3cn2',
    );

    const { users } = await serverClient.upsertUsers([
      {
        id: userID,
        role: role,
      },
    ]);

    if (users) {
      return JSON.stringify({
        success: true,
      });
    } else {
      return JSON.stringify({
        success: false,
      });
    }
  }
}
