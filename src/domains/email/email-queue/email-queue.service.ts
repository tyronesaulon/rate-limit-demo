import { Injectable, Logger } from '@nestjs/common';
import { Queue } from 'bullmq';
import { RedisClient } from '../../../clients/redis/redis.client';

@Injectable()
export class EmailQueueService {
  private readonly logger = new Logger(EmailQueueService.name);
  private readonly _queue: Queue;

  constructor(private readonly redis: RedisClient) {
    this._queue = new Queue('email', {
      connection: this.redis.client(),
    });
  }

  get queue() {
    return this._queue;
  }

  async enqueue<T>(data: T): Promise<void> {
    try {
      this.logger.log('enqueue email', JSON.stringify(data, null, 2));
      await this._queue.add('send-email', data);
      this.logger.log('email enqueued', JSON.stringify(data, null, 2));
    } catch (e) {
      this.logger.error('error enqueuing email', e);
    }
  }
}
