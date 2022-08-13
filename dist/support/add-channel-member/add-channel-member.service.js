"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddChannelMemberService = void 0;
const common_1 = require("@nestjs/common");
const stream_chat_1 = require("stream-chat");
let AddChannelMemberService = class AddChannelMemberService {
    async addChannelMember(req) {
        const { userID, channelID } = req.body;
        const serverClient = stream_chat_1.StreamChat.getInstance('gd2u6sewfhqu', 'd2ntq3qr8b7qrrjusrpkx9g85gbzuxe7xmx2968w2d43pbw4pqgmxuapjn6u3cn2');
        const channel = serverClient.channel('messaging', channelID);
        const add = await channel.addMembers([
            userID,
            '9e16a2b5-ccb3-46d6-926d-8035fca25f71',
        ]);
        if (add.members) {
            return JSON.stringify({
                suceess: true,
            });
        }
        else {
            JSON.stringify({
                success: false,
            });
        }
    }
};
AddChannelMemberService = __decorate([
    (0, common_1.Injectable)()
], AddChannelMemberService);
exports.AddChannelMemberService = AddChannelMemberService;
//# sourceMappingURL=add-channel-member.service.js.map