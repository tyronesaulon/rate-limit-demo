import { IsInt, IsNumber, IsString, IsUUID } from 'class-validator';

export class OrderCreatedDto {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsInt()
  quantity: number;
}
