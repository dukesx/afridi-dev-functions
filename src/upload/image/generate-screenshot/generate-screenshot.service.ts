import { Injectable } from "@nestjs/common";
import { Request, Response } from "express";

const chromium = require("chrome-aws-lambda");

@Injectable()
export class GenerateScreenshotService {
  getService = async (req: Request) => {
    const { html, styles } = req.body;

    const browser = await chromium.puppeteer.launch({
      args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage();
    page.setViewport({ width: 1200, height: 600, deviceScaleFactor: 2 });

    page.setContent(
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

    const screenShotBuffer = await page.screenshot();
    if (screenShotBuffer) {
      return JSON.stringify({
        buffer: screenShotBuffer,
      });
    } else {
      return JSON.stringify({
        error: true,
      });
    }
  };
}