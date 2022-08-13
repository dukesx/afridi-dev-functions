import { HttpException } from '@nestjs/common';
import { Request } from 'express';
export declare class DeleteService {
    deleteImage(request: Request): Promise<string | HttpException>;
}
