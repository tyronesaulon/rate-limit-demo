import { Test, TestingModule } from '@nestjs/testing';
import { SharedEmailService } from './email.service';

describe('EmailService', () => {
  let service: SharedEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharedEmailService],
    }).compile();

    service = module.get<SharedEmailService>(SharedEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
