import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { RedisClient } from '../../../clients/redis/redis.client';

@Injectable()
export class EmailQueueService {
  queue: Queue;

  constructor(private readonly redis: RedisClient) {
    this.queue = new Queue('email', {
      connection: this.redis.client(),
    });
  }
}
