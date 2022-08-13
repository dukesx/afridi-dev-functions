import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Request } from 'express';
import axios from 'axios';

@Injectable()
export class DeleteService {
  async deleteImage(request: Request) {
    const { name } = request.body;
    const data = await axios.delete(`${process.env.BUCKET_URL}/${name}`, {
      headers: {
        AccessKey: process.env.BUCKET_KEY,
      },
    });
    if (data.status == 200) {
      return JSON.stringify({
        response: 'deleted',
      });
    } else {
      return new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
