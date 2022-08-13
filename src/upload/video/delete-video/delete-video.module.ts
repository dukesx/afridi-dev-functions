import { Module } from '@nestjs/common';
import { DeleteVideoController } from './delete-video.controller';
import { DeleteVideoService } from './delete-video.service';

@Module({
  providers: [DeleteVideoService],
  controllers: [DeleteVideoController],
})
export class DeleteVideoModule {}
