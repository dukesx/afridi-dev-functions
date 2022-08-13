import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { GenerateTokenService } from './generate-token.service';

@Controller('support/generate-token')
export class GenerateTokenController {
  constructor(private readonly getGenerateTokenService: GenerateTokenService) {}
  @Post()
  getTokenGenerationService(@Req() req: Request) {
    return this.getGenerateTokenService.generateTokenService(req);
  }
}
