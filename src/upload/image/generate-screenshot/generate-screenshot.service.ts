import { Injectable } from "@nestjs/common";
import { Request, Response } from "express";
import { errors } from "puppeteer";

const puppeteer = require("puppeteer");

@Injectable()
export class GenerateScreenshotService {
  getService = async (req: Request, res: Response) => {
    const { html, styles } = req.body;
    const minimal_args = ["--no-sandbox"];
    const browser = await puppeteer.launch({
      headless: true,
      args: minimal_args,
      ignoreDefaultArgs: ["--disable-extensions"],
    });

    const page = await browser.newPage();
    page.setViewport({ width: 1200, height: 600 });
    const loaded = page.waitForNavigation({
      waitUntil: "load",
    });
    await page.setContent(
      `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      ${styles}
  </head>
  <body>
      <div id="root">${html}</div>

      <script src="./bundle.js"></script>
  </body>
  </html>
    `
    );

    await loaded;

    const screenShotBuffer = await page.screenshot({
      fullPage: true,
      type: "webp",
      quality: 75,
    });

    await browser.close();

    if (screenShotBuffer) {
      // res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
      return res.json({
        buffer: screenShotBuffer,
      });
    } else {
      return res.json({
        error: true,
      });
    }
  };
}
