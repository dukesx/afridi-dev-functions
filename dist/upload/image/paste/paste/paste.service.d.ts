import { HttpException } from '@nestjs/common';
import { Request } from 'express';
export declare class PasteService {
    pasteService(request: Request): Promise<string | HttpException>;
}
