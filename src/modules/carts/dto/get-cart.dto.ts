import { IsNumber, IsDate, IsOptional } from 'class-validator';
export class GetCartDto {
  @IsNumber()
  readonly cartId: number;

  @IsDate()
  @IsOptional()
  readonly cartDate?: Date;
}
