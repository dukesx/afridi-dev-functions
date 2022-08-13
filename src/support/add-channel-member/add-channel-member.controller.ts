import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AddChannelMemberService } from './add-channel-member.service';

@Controller('support/add-channel-member')
export class AddChannelMemberController {
  constructor(
    private readonly getAddChannelMemberService: AddChannelMemberService,
  ) {}

  @Post()
  getChannelAddService(@Req() req: Request) {
    return this.getAddChannelMemberService.addChannelMember(req);
  }
}
