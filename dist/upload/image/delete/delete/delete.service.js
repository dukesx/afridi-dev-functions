"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let DeleteService = class DeleteService {
    async deleteImage(request) {
        const { name } = request.body;
        const data = await axios_1.default.delete(`${process.env.BUCKET_URL}/${name}`, {
            headers: {
                AccessKey: process.env.BUCKET_KEY,
            },
        });
        if (data.status == 200) {
            return JSON.stringify({
                response: 'deleted',
            });
        }
        else {
            return new common_1.HttpException('Internal Server Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
DeleteService = __decorate([
    (0, common_1.Injectable)()
], DeleteService);
exports.DeleteService = DeleteService;
//# sourceMappingURL=delete.service.js.map