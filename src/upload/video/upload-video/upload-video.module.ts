import { Module } from '@nestjs/common';
import { UploadVideoController } from './upload-video.controller';
import { UploadVideoService } from './upload-video.service';

@Module({
  providers: [UploadVideoService],
  controllers: [UploadVideoController],
})
export class UploadVideoModule {}
