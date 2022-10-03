import { Injectable } from "@nestjs/common";
import { Request, Response } from "express";
import { errors } from "puppeteer";

const puppeteer = require("puppeteer");

@Injectable()
export class GenerateScreenshotService {
  getService = async (req: Request, res: Response) => {
    const { html, styles } = req.body;
    const minimal_args = [
      "--autoplay-policy=user-gesture-required",
      "--disable-background-networking",
      "--disable-background-timer-throttling",
      "--disable-backgrounding-occluded-windows",
      "--disable-breakpad",
      "--disable-client-side-phishing-detection",
      "--disable-component-update",
      "--disable-default-apps",
      "--disable-dev-shm-usage",
      "--disable-domain-reliability",
      "--disable-extensions",
      "--disable-features=AudioServiceOutOfProcess",
      "--disable-hang-monitor",
      "--disable-ipc-flooding-protection",
      "--disable-notifications",
      "--disable-offer-store-unmasked-wallet-cards",
      "--disable-popup-blocking",
      "--disable-print-preview",
      "--disable-prompt-on-repost",
      "--disable-renderer-backgrounding",
      "--disable-setuid-sandbox",
      "--disable-speech-api",
      "--disable-sync",
      "--hide-scrollbars",
      "--ignore-gpu-blacklist",
      "--metrics-recording-only",
      "--mute-audio",
      "--no-default-browser-check",
      "--no-first-run",
      "--no-pings",
      "--no-sandbox",
      "--no-zygote",
      "--password-store=basic",
      "--use-gl=swiftshader",
      "--use-mock-keychain",
    ];
    const browser = await puppeteer.launch({
      headless: true,
      args: minimal_args,
      ignoreDefaultArgs: ["--disable-extensions"],
    });

    const page = await browser.newPage();
    page.setViewport({ width: 1200, height: 600, deviceScaleFactor: 2 });
    const loaded = page.waitForNavigation({
      waitUntil: "networkidle0",
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
      res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate");
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
