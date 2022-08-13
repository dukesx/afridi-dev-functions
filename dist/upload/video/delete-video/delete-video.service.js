"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVideoService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let DeleteVideoService = class DeleteVideoService {
    async deleteVideo(request) {
        const { video_id } = request.body;
        const options = {
            method: 'DELETE',
            url: `http://video.bunnycdn.com/library/${process.env.VIDEO_LIBRARY_ID}/videos/${video_id}`,
            headers: {
                Accept: 'application/json',
                AccessKey: process.env.STREAM_ACCESS_KEY,
            },
        };
        const ax = await axios_1.default.request(options);
        if (ax.status == 200) {
            return JSON.stringify({
                response: 'deleted',
            });
        }
    }
};
DeleteVideoService = __decorate([
    (0, common_1.Injectable)()
], DeleteVideoService);
exports.DeleteVideoService = DeleteVideoService;
//# sourceMappingURL=delete-video.service.js.map