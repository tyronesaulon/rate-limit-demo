import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BullmqModule } from './clients/bullmq/bullmq.module';
import { OrderModule } from './domains/order/order.module';
import { SharedEmailModule } from './shared/email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SharedEmailModule,
    BullmqModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
