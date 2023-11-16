import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailQueueService } from './email-queue/email-queue.service';
import { EmailWorkerService } from './email-worker/email-worker.service';
import { RedisModule } from '../../clients/redis/redis.module';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    ConfigService,
    EmailService,
    EmailQueueService,
    EmailWorkerService,
  ],
  imports: [RedisModule],
  exports: [EmailService],
})
export class EmailModule {}
