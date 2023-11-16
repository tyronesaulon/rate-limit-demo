import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { SharedEmailModule } from '../../shared/email/email.module';

@Module({
  controllers: [OrderController],
  imports: [SharedEmailModule],
})
export class OrderModule {}
