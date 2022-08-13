"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasteService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const nanoid_1 = require("nanoid");
const path_1 = require("path");
let PasteService = class PasteService {
    async pasteService(request) {
        const nanoid = (0, nanoid_1.customAlphabet)('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz', 10);
        const response = await axios_1.default.get(request.body.url, {
            responseType: 'arraybuffer',
        });
        const buff = Buffer.from(response.data, 'binary');
        const fileName = nanoid() + '.' + path_1.default.basename(response.request.path).split('.')[1];
        const data = await axios_1.default.put(`https://${process.env.BUCKET_URL}/${fileName}`, buff, {
            headers: {
                AccessKey: process.env.BUCKET_KEY,
            },
        });
        if (data.status == 200) {
            return JSON.stringify({
                success: 1,
                file: {
                    url: `${process.env.IMAGE_CDN_PATH}/tr:n-400x/${fileName}`,
                },
            });
        }
        else {
            return new common_1.HttpException('Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
PasteService = __decorate([
    (0, common_1.Injectable)()
], PasteService);
exports.PasteService = PasteService;
//# sourceMappingURL=paste.service.js.map