"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateTokenService = void 0;
const common_1 = require("@nestjs/common");
const stream_chat_1 = require("stream-chat");
let GenerateTokenService = class GenerateTokenService {
    async generateTokenService(req) {
        const { userID } = req.body;
        const serverClient = stream_chat_1.StreamChat.getInstance('gd2u6sewfhqu', 'd2ntq3qr8b7qrrjusrpkx9g85gbzuxe7xmx2968w2d43pbw4pqgmxuapjn6u3cn2');
        const token = serverClient.createToken(userID);
        return JSON.stringify({
            token: token,
        });
    }
};
GenerateTokenService = __decorate([
    (0, common_1.Injectable)()
], GenerateTokenService);
exports.GenerateTokenService = GenerateTokenService;
//# sourceMappingURL=generate-token.service.js.map