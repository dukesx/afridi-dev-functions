import { Module } from "@nestjs/common";
import { GeneratePlaceholderController } from "./generate-placeholder.controller";
import { GeneratePlaceholderService } from "./generate-placeholder.service";

@Module({
  providers: [GeneratePlaceholderService],
  controllers: [GeneratePlaceholderController],
})
export class GeneratePlaceholderModule {}
