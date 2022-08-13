import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FormService } from './form.service.js';

@Controller('/upload/image/form')
export class FormController {
  constructor(private readonly getService: FormService) {}
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  getContent(@UploadedFile() file: Express.Multer.File): any {
    return this.getService.getService(file);
  }
}
