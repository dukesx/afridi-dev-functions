import { Controller, Post, Req, Res } from "@nestjs/common";
import { Request } from "express";
import { GeneratePlaceholderService } from "./generate-placeholder.service";

@Controller("/upload/image/generate-placeholder")
export class GeneratePlaceholderController {
  constructor(
    private readonly getPlaceholderService: GeneratePlaceholderService
  ) {}
  @Post()
  generatePlaceholder(@Req() req: Request) {
    return this.getPlaceholderService.getService(req);
  }
}
