import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { initializeApp, ServiceAccount } from "firebase-admin/app";
import { credential } from "firebase-admin";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "*",
  });

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
