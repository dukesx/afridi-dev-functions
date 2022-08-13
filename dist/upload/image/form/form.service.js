"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const nanoid_1 = require("nanoid");
let FormService = class FormService {
    async getService(file) {
        console.log(file);
        const nanoid = (0, nanoid_1.customAlphabet)('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz', 10);
        const buffer = file.buffer;
        const nameLength = file.originalname.split('.').length;
        const name = nanoid() + '.' + file.originalname.split('.')[nameLength - 1];
        const getter = await axios_1.default.put(`${process.env.BUCKET_URL}/${name}`, buffer, {
            headers: {
                AccessKey: process.env.BUCKET_KEY,
            },
        });
        if (getter.status == 201) {
            return JSON.stringify({
                success: 1,
                file: {
                    url: `${process.env.NEXT_PUBLIC_IMAGE_CDN_PATH}/tr:n-400x/${name}`,
                },
            });
        }
    }
};
FormService = __decorate([
    (0, common_1.Injectable)()
], FormService);
exports.FormService = FormService;
//# sourceMappingURL=form.service.js.map