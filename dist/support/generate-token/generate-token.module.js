"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateTokenModule = void 0;
const common_1 = require("@nestjs/common");
const generate_token_controller_1 = require("./generate-token.controller");
const generate_token_service_1 = require("./generate-token.service");
let GenerateTokenModule = class GenerateTokenModule {
};
GenerateTokenModule = __decorate([
    (0, common_1.Module)({
        providers: [generate_token_service_1.GenerateTokenService],
        controllers: [generate_token_controller_1.GenerateTokenController],
    })
], GenerateTokenModule);
exports.GenerateTokenModule = GenerateTokenModule;
//# sourceMappingURL=generate-token.module.js.map