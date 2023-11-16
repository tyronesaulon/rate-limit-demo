import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './domains/email/email.module';
import { ConfigModule } from '@nestjs/config';
import { BullmqModule } from './clients/bullmq/bullmq.module';

@Module({
  imports: [ConfigModule.forRoot(), EmailModule, BullmqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
