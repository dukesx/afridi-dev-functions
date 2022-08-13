import { UploadChatCredentialsService } from './upload-chat-credentials.service';
export declare class UploadChatCredentialsController {
    private readonly getChatCredentialUploadService;
    constructor(getChatCredentialUploadService: UploadChatCredentialsService);
    uploadController(): Promise<string>;
}
