import { Request } from 'express';
import { AddChannelMemberService } from './add-channel-member.service';
export declare class AddChannelMemberController {
    private readonly getAddChannelMemberService;
    constructor(getAddChannelMemberService: AddChannelMemberService);
    getChannelAddService(req: Request): Promise<string>;
}
