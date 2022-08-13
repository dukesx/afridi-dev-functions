import { Module } from '@nestjs/common';
import { GenerateTokenController } from './generate-token.controller';
import { GenerateTokenService } from './generate-token.service';

@Module({
  providers: [GenerateTokenService],
  controllers: [GenerateTokenController],
})
export class GenerateTokenModule {}
