import { Module } from '@nestjs/common';
import { RedisClient } from './redis.client';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [RedisClient],
  exports: [RedisClient],
  imports: [ConfigModule],
})
export class RedisModule {}
