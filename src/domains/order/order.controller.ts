import { Body, Controller, Logger, Post } from '@nestjs/common';
import { OrderCreatedDto } from './dtos/order-created.dto';

@Controller('order')
export class OrderController {
  private readonly logger = new Logger(OrderController.name);
  @Post()
  async onOrderCreated(
    @Body() order: OrderCreatedDto,
  ): Promise<OrderCreatedDto> {
    this.logger.log('order received', order);
    return order;
  }
}
