import { Request } from 'express';
import { DeleteVideoService } from './delete-video.service';
export declare class DeleteVideoController {
    private readonly getDeleteVideoService;
    constructor(getDeleteVideoService: DeleteVideoService);
    getDeleteService(request: Request): Promise<string>;
}
