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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasteController = void 0;
const common_1 = require("@nestjs/common");
const paste_service_1 = require("./paste.service");
let PasteController = class PasteController {
    constructor(getPasteService) {
        this.getPasteService = getPasteService;
    }
    getService(request) {
        return this.getPasteService.pasteService(request);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PasteController.prototype, "getService", null);
PasteController = __decorate([
    (0, common_1.Controller)('/upload/image/paste'),
    __metadata("design:paramtypes", [paste_service_1.PasteService])
], PasteController);
exports.PasteController = PasteController;
//# sourceMappingURL=paste.controller.js.map