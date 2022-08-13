import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { StreamChat } from 'stream-chat';
@Injectable()
export class AddChannelMemberService {
  async addChannelMember(req: Request) {
    const { userID, channelID } = req.body;
    const serverClient = StreamChat.getInstance(
      'gd2u6sewfhqu',
      'd2ntq3qr8b7qrrjusrpkx9g85gbzuxe7xmx2968w2d43pbw4pqgmxuapjn6u3cn2',
    );

    const channel = serverClient.channel('messaging', channelID);

    const add = await channel.addMembers([
      userID,
      '9e16a2b5-ccb3-46d6-926d-8035fca25f71',
    ]);

    if (add.members) {
      return JSON.stringify({
        suceess: true,
      });
    } else {
      JSON.stringify({
        success: false,
      });
    }
  }
}
