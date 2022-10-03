import { Controller, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { GenerateScreenshotService } from "./generate-screenshot.service";

@Controller("/upload/image/generate-screenshot")
export class GenerateScreenshotController {
  constructor(
    private readonly getScreenshotService: GenerateScreenshotService
  ) {}
  @Post()
  async generateScreenshot(@Req() req: Request, @Res() res: Response) {
    return this.getScreenshotService.getService(req, res);
  }
}
