import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './upload/image/form/form.module';
import { ConfigModule } from '@nestjs/config';
import { DeleteModule } from './upload/image/delete/delete/delete.module';
import { PasteModule } from './upload/image/paste/paste/paste.module';
import { UploadVideoModule } from './upload/video/upload-video/upload-video.module';
import { DeleteVideoModule } from './upload/video/delete-video/delete-video.module';
import { SendFirebaseMessageModule } from './messaging/firebase/send/send-firebase-message.module';
import { SubscriptionUnsubModule } from './subscriptions/unsub/unsub.module';
import { GenerateTokenModule } from './support/generate-token/generate-token.module';
import { AddMembersModule } from './support/add-members/add-members.module';
import { AddChannelMemberModule } from './support/add-channel-member/add-channel-member.module';
import { UploadChatCredentialsModule } from './support/upload-chat-credentials/upload-chat-credentials.module';

@Module({
  imports: [
    FormModule,
    DeleteModule,
    PasteModule,
    UploadVideoModule,
    DeleteVideoModule,
    SendFirebaseMessageModule,
    SubscriptionUnsubModule,
    GenerateTokenModule,
    AddMembersModule,
    AddChannelMemberModule,
    UploadChatCredentialsModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
