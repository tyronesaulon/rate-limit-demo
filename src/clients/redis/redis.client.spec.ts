import { Test, TestingModule } from '@nestjs/testing';
import { RedisClient } from './redis.client';

describe('RedisClient', () => {
  let service: RedisClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedisClient],
    }).compile();

    service = module.get<RedisClient>(RedisClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
