"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasteModule = void 0;
const common_1 = require("@nestjs/common");
const paste_controller_1 = require("./paste.controller");
const paste_service_1 = require("./paste.service");
let PasteModule = class PasteModule {
};
PasteModule = __decorate([
    (0, common_1.Module)({
        providers: [paste_service_1.PasteService],
        controllers: [paste_controller_1.PasteController],
    })
], PasteModule);
exports.PasteModule = PasteModule;
//# sourceMappingURL=paste.module.js.map