import { Injectable } from "@nestjs/common";
import { Request, Response } from "express";
import { getPlaiceholder } from "plaiceholder";

@Injectable()
export class GeneratePlaceholderService {
  async getService(request: Request) {
    const { cover } = request.body;

    const { base64 } = await getPlaiceholder(
      `https://ik.imagekit.io/afrididotdev/tr:w-400${cover}`
    );

    if (base64) {
      return JSON.stringify({
        placeholder: base64,
      });
    } else {
      return JSON.stringify({
        error: "Error",
      });
    }
  }
}
