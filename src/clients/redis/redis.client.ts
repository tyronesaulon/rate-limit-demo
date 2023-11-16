import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import Redis from 'ioredis';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RedisClient implements OnApplicationBootstrap {
  private readonly redisClient: Redis;
  private readonly logger = new Logger(RedisClient.name);

  constructor(private config: ConfigService) {
    this.redisClient = new Redis({
      host: this.config.get('REDIS_HOST'),
      port: this.config.get('REDIS_PORT'),
      maxRetriesPerRequest: null,
    });
  }

  onApplicationBootstrap() {
    this.redisClient.on('connecting', () => {
      this.logger.log('connecting to redis...');
    });

    this.redisClient.on('connect', () => {
      this.logger.log('connected to redis!');
    });

    this.redisClient.on('close', () => {
      this.logger.log('redis connection closed!');
    });

    this.redisClient.on('error', (error) => {
      this.logger.error(error);
    });
  }

  client(): Redis {
    return this.redisClient;
  }
}
