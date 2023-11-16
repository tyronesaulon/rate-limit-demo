import { IsEmail, IsInt, IsNumber, IsString, IsUUID } from 'class-validator';

export class OrderCreatedDto {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number; // cents

  @IsInt()
  quantity: number;
}
