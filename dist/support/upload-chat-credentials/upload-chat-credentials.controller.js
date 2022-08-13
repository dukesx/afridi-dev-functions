"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadChatCredentialsController = void 0;
const common_1 = require("@nestjs/common");
const upload_chat_credentials_service_1 = require("./upload-chat-credentials.service");
let UploadChatCredentialsController = class UploadChatCredentialsController {
    constructor(getChatCredentialUploadService) {
        this.getChatCredentialUploadService = getChatCredentialUploadService;
    }
    uploadController() {
        return this.getChatCredentialUploadService.uploadCredentials();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UploadChatCredentialsController.prototype, "uploadController", null);
UploadChatCredentialsController = __decorate([
    (0, common_1.Controller)('support/upload-chat-credentials'),
    __metadata("design:paramtypes", [upload_chat_credentials_service_1.UploadChatCredentialsService])
], UploadChatCredentialsController);
exports.UploadChatCredentialsController = UploadChatCredentialsController;
//# sourceMappingURL=upload-chat-credentials.controller.js.map