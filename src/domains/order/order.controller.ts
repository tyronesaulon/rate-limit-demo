import { Body, Controller, Logger, Post } from '@nestjs/common';
import { OrderCreatedDto } from './dtos/order-created.dto';
import { SharedEmailService } from '../../shared/email/email.service';

@Controller('order')
export class OrderController {
  private readonly logger = new Logger(OrderController.name);

  constructor(private readonly sharedEmailService: SharedEmailService) {}

  @Post()
  async onOrderCreated(@Body() order: OrderCreatedDto): Promise<void> {
    this.logger.log('order received', order);
    await this.sharedEmailService.sendOrderEmail(order);
  }
}
