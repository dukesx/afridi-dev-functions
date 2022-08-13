/// <reference types="multer" />
import { UploadVideoService } from './upload-video.service';
export declare class UploadVideoController {
    private readonly getVideoUploadService;
    constructor(getVideoUploadService: UploadVideoService);
    videoUploadService(file: Express.Multer.File): Promise<string | import("@nestjs/common").HttpException>;
}
