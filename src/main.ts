import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeApp, ServiceAccount } from 'firebase-admin/app';
import { credential } from 'firebase-admin';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  // Set the config options
  const adminConfig: ServiceAccount = {
    projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
    privateKey: configService
      .get<string>('FIREBASE_PRIVATE_KEY')
      .replace(/\\n/g, '\n'),
    clientEmail: configService.get<string>('FIREBASE_CLIENT_EMAIL'),
  };
  // Initialize the firebase admin app
  initializeApp({
    credential: credential.cert(adminConfig),
  });
  app.enableCors({
    origin: '*',
  });

  await app.listen(4000);
}
bootstrap();
