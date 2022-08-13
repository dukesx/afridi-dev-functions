"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const form_module_1 = require("./upload/image/form/form.module");
const config_1 = require("@nestjs/config");
const delete_module_1 = require("./upload/image/delete/delete/delete.module");
const paste_module_1 = require("./upload/image/paste/paste/paste.module");
const upload_video_module_1 = require("./upload/video/upload-video/upload-video.module");
const delete_video_module_1 = require("./upload/video/delete-video/delete-video.module");
const send_firebase_message_module_1 = require("./messaging/firebase/send/send-firebase-message.module");
const unsub_module_1 = require("./subscriptions/unsub/unsub.module");
const generate_token_module_1 = require("./support/generate-token/generate-token.module");
const add_members_module_1 = require("./support/add-members/add-members.module");
const add_channel_member_module_1 = require("./support/add-channel-member/add-channel-member.module");
const upload_chat_credentials_module_1 = require("./support/upload-chat-credentials/upload-chat-credentials.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            form_module_1.FormModule,
            delete_module_1.DeleteModule,
            paste_module_1.PasteModule,
            upload_video_module_1.UploadVideoModule,
            delete_video_module_1.DeleteVideoModule,
            send_firebase_message_module_1.SendFirebaseMessageModule,
            unsub_module_1.SubscriptionUnsubModule,
            generate_token_module_1.GenerateTokenModule,
            add_members_module_1.AddMembersModule,
            add_channel_member_module_1.AddChannelMemberModule,
            upload_chat_credentials_module_1.UploadChatCredentialsModule,
            config_1.ConfigModule.forRoot(),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map