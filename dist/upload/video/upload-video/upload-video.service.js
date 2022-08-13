"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadVideoService = void 0;
const common_1 = require("@nestjs/common");
const nanoid_1 = require("nanoid");
const node_libcurl_1 = require("node-libcurl");
const stream_1 = require("stream");
const nanoid = (0, nanoid_1.customAlphabet)('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz', 10);
let UploadVideoService = class UploadVideoService {
    async videoUploadService(file) {
        const videoSetting = file;
        const baseUrl = 'http://video.bunnycdn.com/library/';
        const { data, statusCode } = await node_libcurl_1.curly.post(baseUrl + process.env.VIDEO_LIBRARY_ID + '/videos', {
            postFields: JSON.stringify({
                title: nanoid(),
            }),
            httpHeader: [
                'Content-Type: application/json',
                'AccessKey: ' + process.env.STREAM_ACCESS_KEY,
            ],
        });
        if (statusCode == 200) {
            const readableStreamToUpload = bufferToStream(videoSetting.buffer);
            const { statusCode: statusCode2 } = await node_libcurl_1.curly.post(baseUrl + process.env.VIDEO_LIBRARY_ID + '/videos/' + data.guid, {
                uploadBufferSize: 16 * 1024,
                curlyStreamUpload: readableStreamToUpload,
                transferEncoding: 'chunked',
                httpHeader: [
                    'Transfer-Encoding: chunked',
                    'AccessKey: ' + process.env.STREAM_ACCESS_KEY,
                ],
                UPLOAD: true,
            });
            if (statusCode2 == 200) {
                return JSON.stringify({
                    video: `${process.env.VIDEO_LIBRARY_ID}/${data.guid}`,
                    thumbnail: data.thumbnailFileName,
                });
            }
            else {
                return new common_1.HttpException('Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        else {
            return new common_1.HttpException('Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
UploadVideoService = __decorate([
    (0, common_1.Injectable)()
], UploadVideoService);
exports.UploadVideoService = UploadVideoService;
function bufferToStream(binary) {
    const readableInstanceStream = new stream_1.Readable({
        read() {
            this.push(binary);
            this.push(null);
        },
    });
    return readableInstanceStream;
}
//# sourceMappingURL=upload-video.service.js.map