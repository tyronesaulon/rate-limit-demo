import { Injectable } from '@nestjs/common';
import { EmailService } from '../../domains/email/email.service';
import { Order } from '../../domains/order/models/order.interface';

@Injectable()
export class SharedEmailService {
  constructor(private readonly emailService: EmailService) {}

  async sendOrderEmail(data: Order): Promise<void> {
    await this.emailService.send(data);
  }
}
