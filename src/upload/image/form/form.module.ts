import { Module } from '@nestjs/common';
import { FormController } from './form.controller';
import { FormService } from './form.service.js';

@Module({
  providers: [FormService],
  controllers: [FormController],
})
export class FormModule {}
