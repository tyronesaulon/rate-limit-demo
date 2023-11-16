import { Injectable } from '@nestjs/common';
import { RedisClient } from '../../../clients/redis/redis.client';
import { Processor, Worker } from 'bullmq';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailWorkerService {
  private readonly worker: Worker;
  constructor(
    private readonly redis: RedisClient,
    private readonly config: ConfigService,
  ) {
    this.worker = new Worker('email', this.sendEmail as Processor, {
      connection: this.redis.client(),
      limiter: {
        max: this.config.get('EMAIL_WORKER_MAX'),
        duration: this.config.get('EMAIL_WORKER_DURATION'),
      },
    });
  }

  sendEmail(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5);
    });
  }
}
