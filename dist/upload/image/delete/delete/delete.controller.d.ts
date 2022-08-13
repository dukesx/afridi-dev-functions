import { Request } from 'express';
import { DeleteService } from './delete.service';
export declare class DeleteController {
    private readonly getDeleteService;
    constructor(getDeleteService: DeleteService);
    fetchDeleteService(request: Request): any;
}
