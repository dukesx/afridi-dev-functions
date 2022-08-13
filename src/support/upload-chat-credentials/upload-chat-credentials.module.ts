import { Module } from '@nestjs/common';
import { UploadChatCredentialsController } from './upload-chat-credentials.controller';
import { UploadChatCredentialsService } from './upload-chat-credentials.service';

@Module({
  providers: [UploadChatCredentialsService],
  controllers: [UploadChatCredentialsController],
})
export class UploadChatCredentialsModule {}
