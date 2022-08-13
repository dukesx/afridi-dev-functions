import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { customAlphabet } from 'nanoid';
import { curly } from 'node-libcurl';
import { Readable } from 'stream';

//
const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz',
  10,
);
@Injectable()
export class UploadVideoService {
  async videoUploadService(file: Express.Multer.File) {
    const videoSetting = file;

    const baseUrl = 'http://video.bunnycdn.com/library/';
    const { data, statusCode } = await curly.post(
      baseUrl + process.env.VIDEO_LIBRARY_ID + '/videos',
      {
        postFields: JSON.stringify({
          title: nanoid(),
        }),
        httpHeader: [
          'Content-Type: application/json',
          'AccessKey: ' + process.env.STREAM_ACCESS_KEY,
        ],
      },
    );

    if (statusCode == 200) {
      const readableStreamToUpload = bufferToStream(videoSetting.buffer);

      const { statusCode: statusCode2 } = await curly.post(
        baseUrl + process.env.VIDEO_LIBRARY_ID + '/videos/' + data.guid,
        {
          uploadBufferSize: 16 * 1024,
          curlyStreamUpload: readableStreamToUpload,
          transferEncoding: 'chunked',
          httpHeader: [
            'Transfer-Encoding: chunked',
            'AccessKey: ' + process.env.STREAM_ACCESS_KEY,
          ],
          UPLOAD: true,
        },
      );

      if (statusCode2 == 200) {
        return JSON.stringify({
          video: `${process.env.VIDEO_LIBRARY_ID}/${data.guid}`,
          thumbnail: data.thumbnailFileName,
        });
      } else {
        return new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    } else {
      return new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

function bufferToStream(binary) {
  const readableInstanceStream = new Readable({
    read() {
      this.push(binary);
      this.push(null);
    },
  });

  return readableInstanceStream;
}
