import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { DeleteVideoService } from './delete-video.service';

@Controller('/upload/video/delete')
export class DeleteVideoController {
  constructor(private readonly getDeleteVideoService: DeleteVideoService) {}

  @Post()
  getDeleteService(@Req() request: Request) {
    return this.getDeleteVideoService.deleteVideo(request);
  }
}
