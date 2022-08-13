import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadVideoService } from './upload-video.service';

@Controller('/upload/video/form')
export class UploadVideoController {
  constructor(private readonly getVideoUploadService: UploadVideoService) {}
  @UseInterceptors(FileInterceptor('file'))
  @Post()
  videoUploadService(@UploadedFile() file: Express.Multer.File) {
    return this.getVideoUploadService.videoUploadService(file);
  }
}
