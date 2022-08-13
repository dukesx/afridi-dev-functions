"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVideoModule = void 0;
const common_1 = require("@nestjs/common");
const delete_video_controller_1 = require("./delete-video.controller");
const delete_video_service_1 = require("./delete-video.service");
let DeleteVideoModule = class DeleteVideoModule {
};
DeleteVideoModule = __decorate([
    (0, common_1.Module)({
        providers: [delete_video_service_1.DeleteVideoService],
        controllers: [delete_video_controller_1.DeleteVideoController],
    })
], DeleteVideoModule);
exports.DeleteVideoModule = DeleteVideoModule;
//# sourceMappingURL=delete-video.module.js.map