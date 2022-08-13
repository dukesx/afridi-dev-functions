"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendFirebaseMessagingService = void 0;
const common_1 = require("@nestjs/common");
const messaging_1 = require("firebase-admin/messaging");
let SendFirebaseMessagingService = class SendFirebaseMessagingService {
    async sendFirebaseMessage(request) {
        const { token, message, title } = request.body;
        console.log(token);
        console.log(message);
        const sendableMessage = {
            notification: {
                body: message,
                title: title,
            },
            token: token,
        };
        const data = await (0, messaging_1.getMessaging)().send(sendableMessage);
        if (data) {
            console.log('Successfully sent message:', data);
            return JSON.stringify({
                success: true,
            });
        }
    }
};
SendFirebaseMessagingService = __decorate([
    (0, common_1.Injectable)()
], SendFirebaseMessagingService);
exports.SendFirebaseMessagingService = SendFirebaseMessagingService;
//# sourceMappingURL=send-firebase-message.service.js.map