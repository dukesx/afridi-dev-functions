import { Request } from 'express';
import { AddMembersService } from './add-members.service';
export declare class AddMembersController {
    private readonly getAddMemberControllerService;
    constructor(getAddMemberControllerService: AddMembersService);
    getService(req: Request): Promise<string>;
}
