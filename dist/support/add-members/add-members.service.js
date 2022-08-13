"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMembersService = void 0;
const common_1 = require("@nestjs/common");
const stream_chat_1 = require("stream-chat");
let AddMembersService = class AddMembersService {
    async getAddMemberService(req) {
        const { userID, role } = req.body;
        const serverClient = stream_chat_1.StreamChat.getInstance('gd2u6sewfhqu', 'd2ntq3qr8b7qrrjusrpkx9g85gbzuxe7xmx2968w2d43pbw4pqgmxuapjn6u3cn2');
        const { users } = await serverClient.upsertUsers([
            {
                id: userID,
                role: role,
            },
        ]);
        if (users) {
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
AddMembersService = __decorate([
    (0, common_1.Injectable)()
], AddMembersService);
exports.AddMembersService = AddMembersService;
//# sourceMappingURL=add-members.service.js.map