import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { Request } from 'express';
import { customAlphabet } from 'nanoid';
import path from 'path';
@Injectable()
export class PasteService {
  async pasteService(request: Request) {
    const nanoid = customAlphabet(
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz',
      10,
    );
    const response = await axios.get(request.body.url, {
      responseType: 'arraybuffer',
    });

    const buff = Buffer.from(response.data, 'binary');
    const fileName =
      nanoid() + '.' + path.basename(response.request.path).split('.')[1];

    const data = await axios.put(
      `https://${process.env.BUCKET_URL}/${fileName}`,
      buff,
      {
        headers: {
          AccessKey: process.env.BUCKET_KEY,
        },
      },
    );

    if (data.status == 200) {
      return JSON.stringify({
        success: 1,
        file: {
          url: `${process.env.IMAGE_CDN_PATH}/tr:n-400x/${fileName}`,
        },
      });
    } else {
      return new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
