import { Request } from 'express';
import { GenerateTokenService } from './generate-token.service';
export declare class GenerateTokenController {
    private readonly getGenerateTokenService;
    constructor(getGenerateTokenService: GenerateTokenService);
    getTokenGenerationService(req: Request): Promise<string>;
}
