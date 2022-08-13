import { Request } from 'express';
import { PasteService } from './paste.service';
export declare class PasteController {
    private readonly getPasteService;
    constructor(getPasteService: PasteService);
    getService(request: Request): Promise<string | import("@nestjs/common").HttpException>;
}
