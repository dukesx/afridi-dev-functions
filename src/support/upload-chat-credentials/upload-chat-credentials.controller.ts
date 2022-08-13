import { Controller, Get } from '@nestjs/common';
import { UploadChatCredentialsService } from './upload-chat-credentials.service';

@Controller('support/upload-chat-credentials')
export class UploadChatCredentialsController {
  constructor(
    private readonly getChatCredentialUploadService: UploadChatCredentialsService,
  ) {}
  @Get()
  uploadController() {
    return this.getChatCredentialUploadService.uploadCredentials();
  }
}
