/// <reference types="multer" />
import { HttpException } from '@nestjs/common';
export declare class UploadVideoService {
    videoUploadService(file: Express.Multer.File): Promise<string | HttpException>;
}
