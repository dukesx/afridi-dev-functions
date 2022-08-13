"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionUnsubService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let SubscriptionUnsubService = class SubscriptionUnsubService {
    async unsubSubscription(request) {
        const { product_identifier, app_user_id } = request.body;
        const response = await axios_1.default.post(`https://api.revenuecat.com/v1/subscribers/${app_user_id}/subscriptions/${product_identifier}/revoke`, {}, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.REVENUE_CAT_API}`,
            },
        });
        if (response.status == 200) {
            return JSON.stringify({
                success: true,
            });
        }
        else {
            return JSON.stringify({
                success: false,
            });
        }
    }
};
SubscriptionUnsubService = __decorate([
    (0, common_1.Injectable)()
], SubscriptionUnsubService);
exports.SubscriptionUnsubService = SubscriptionUnsubService;
//# sourceMappingURL=unsub.service.js.map