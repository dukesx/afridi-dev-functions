import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { customAlphabet } from 'nanoid';

@Injectable()
export class FormService {
  async getService(file: Express.Multer.File) {
    console.log(file);

    const nanoid = customAlphabet(
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz',
      10,
    );
    const buffer = file.buffer;
    const nameLength = file.originalname.split('.').length;
    const name = nanoid() + '.' + file.originalname.split('.')[nameLength - 1];

    const getter = await axios.put(
      `${process.env.BUCKET_URL}/${name}`,
      buffer,
      {
        headers: {
          AccessKey: process.env.BUCKET_KEY,
        },
      },
    );

    if (getter.status == 201) {
      return JSON.stringify({
        success: 1,
        file: {
          url: `${process.env.NEXT_PUBLIC_IMAGE_CDN_PATH}/tr:n-400x/${name}`,
        },
      });
    }
  }
}
