"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const app_1 = require("firebase-admin/app");
const firebase_admin_1 = require("firebase-admin");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const adminConfig = {
        projectId: configService.get('FIREBASE_PROJECT_ID'),
        privateKey: configService
            .get('FIREBASE_PRIVATE_KEY')
            .replace(/\\n/g, '\n'),
        clientEmail: configService.get('FIREBASE_CLIENT_EMAIL'),
    };
    (0, app_1.initializeApp)({
        credential: firebase_admin_1.credential.cert(adminConfig),
    });
    app.enableCors({
        origin: '*',
    });
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map