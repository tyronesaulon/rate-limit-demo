import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { RedisClient } from '../../../clients/redis/redis.client';
import { Job, Processor, Worker } from 'bullmq';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailWorkerService implements OnApplicationBootstrap {
  private readonly logger = new Logger(EmailWorkerService.name);
  private readonly worker: Worker;
  constructor(
    private readonly redis: RedisClient,
    private readonly config: ConfigService,
  ) {
    this.worker = new Worker('email', this.send as Processor, {
      connection: this.redis.client(),
      concurrency: +this.config.get('EMAIL_WORKER_MAX'),
      limiter: {
        max: +this.config.get('EMAIL_WORKER_MAX'),
        duration: +this.config.get('EMAIL_WORKER_DURATION'),
      },
    });
  }

  onApplicationBootstrap() {
    this.worker.on('completed', (job: Job) => {
      this.logger.log('completed', job.data);
    });

    this.worker.on('failed', (_, error: Error) => {
      this.logger.log('failed', error);
    });

    this.worker.on('progress', (_, progress: number | object) => {
      this.logger.log('progress', progress);
    });

    this.worker.on('error', (error: Error) => {
      this.logger.error('error', error);
    });
  }

  send(job: Job): Promise<Job['data']> {
    return new Promise((resolve) => {
      setTimeout(() => {
        job.updateProgress(50).catch();
      }, 2500);

      setTimeout(() => {
        resolve(job.data);
      }, 5000);
    });
  }
}
