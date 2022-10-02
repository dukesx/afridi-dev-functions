import { Module } from "@nestjs/common";
import { GenerateScreenshotController } from "./generate-screenshot.controller";
import { GenerateScreenshotService } from "./generate-screenshot.service";

@Module({
  providers: [GenerateScreenshotService],
  controllers: [GenerateScreenshotController],
})
export class GenerateScreenshotModule {}
