import { Module } from '@nestjs/common';
import { AddChannelMemberController } from './add-channel-member.controller';
import { AddChannelMemberService } from './add-channel-member.service';

@Module({
  providers: [AddChannelMemberService],
  controllers: [AddChannelMemberController],
})
export class AddChannelMemberModule {}
