import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { PasteService } from './paste.service';

@Controller('/upload/image/paste')
export class PasteController {
  constructor(private readonly getPasteService: PasteService) {}

  @Post()
  getService(@Req() request: Request) {
    return this.getPasteService.pasteService(request);
  }
}
