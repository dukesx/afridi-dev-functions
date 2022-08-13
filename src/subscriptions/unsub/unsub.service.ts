import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import axios from 'axios';

@Injectable()
export class SubscriptionUnsubService {
  async unsubSubscription(request: Request) {
    const { product_identifier, app_user_id } = request.body;

    const response = await axios.post(
      `https://api.revenuecat.com/v1/subscribers/${app_user_id}/subscriptions/${product_identifier}/revoke`,
      {},
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REVENUE_CAT_API}`,
        },
      },
    );
    if (response.status == 200) {
      return JSON.stringify({
        success: true,
      });
    } else {
      return JSON.stringify({
        success: false,
      });
    }
  }
}
