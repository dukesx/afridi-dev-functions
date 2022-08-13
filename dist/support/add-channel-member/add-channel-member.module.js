"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddChannelMemberModule = void 0;
const common_1 = require("@nestjs/common");
const add_channel_member_controller_1 = require("./add-channel-member.controller");
const add_channel_member_service_1 = require("./add-channel-member.service");
let AddChannelMemberModule = class AddChannelMemberModule {
};
AddChannelMemberModule = __decorate([
    (0, common_1.Module)({
        providers: [add_channel_member_service_1.AddChannelMemberService],
        controllers: [add_channel_member_controller_1.AddChannelMemberController],
    })
], AddChannelMemberModule);
exports.AddChannelMemberModule = AddChannelMemberModule;
//# sourceMappingURL=add-channel-member.module.js.map