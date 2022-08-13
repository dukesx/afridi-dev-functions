import { Module } from '@nestjs/common';
import { DeleteController } from './delete.controller';
import { DeleteService } from './delete.service';

@Module({
  providers: [DeleteService],
  controllers: [DeleteController],
})
export class DeleteModule {}
