import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FormModule } from "./upload/image/form/form.module";
import { ConfigModule } from "@nestjs/config";
import { DeleteModule } from "./upload/image/delete/delete/delete.module";
import { PasteModule } from "./upload/image/paste/paste/paste.module";
import { UploadVideoModule } from "./upload/video/upload-video/upload-video.module";
import { DeleteVideoModule } from "./upload/video/delete-video/delete-video.module";

@Module({
  imports: [
    FormModule,
    DeleteModule,
    PasteModule,
    UploadVideoModule,
    DeleteVideoModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
