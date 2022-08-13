import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { DeleteService } from './delete.service';

@Controller('/upload/image/delete')
export class DeleteController {
  constructor(private readonly getDeleteService: DeleteService) {}
  @Post()
  fetchDeleteService(@Req() request: Request): any {
    return this.getDeleteService.deleteImage(request);
  }
}
