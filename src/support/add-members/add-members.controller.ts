import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AddMembersService } from './add-members.service';

@Controller('support/add-members')
export class AddMembersController {
  constructor(
    private readonly getAddMemberControllerService: AddMembersService,
  ) {}

  @Post()
  getService(@Req() req: Request) {
    return this.getAddMemberControllerService.getAddMemberService(req);
  }
}
