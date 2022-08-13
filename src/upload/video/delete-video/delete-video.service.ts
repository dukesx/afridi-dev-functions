import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import axios from 'axios';

@Injectable()
export class DeleteVideoService {
  async deleteVideo(request: Request) {
    const { video_id } = request.body;
    const options = {
      method: 'DELETE',
      url: `http://video.bunnycdn.com/library/${process.env.VIDEO_LIBRARY_ID}/videos/${video_id}`,
      headers: {
        Accept: 'application/json',
        AccessKey: process.env.STREAM_ACCESS_KEY,
      },
    };

    const ax = await axios.request(options);

    if (ax.status == 200) {
      return JSON.stringify({
        response: 'deleted',
      });
    }
  }
}
