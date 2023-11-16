import { Module } from '@nestjs/common';
import { EmailModule } from '../../domains/email/email.module';
import { SharedEmailService } from './email.service';

@Module({
  imports: [EmailModule],
  providers: [SharedEmailService],
  exports: [SharedEmailService],
})
export class SharedEmailModule {}
