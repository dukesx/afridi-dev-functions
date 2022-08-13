import { Module } from '@nestjs/common';
import { PasteController } from './paste.controller';
import { PasteService } from './paste.service';

@Module({
  providers: [PasteService],
  controllers: [PasteController],
})
export class PasteModule {}
