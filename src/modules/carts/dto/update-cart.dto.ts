import { Type } from 'class-transformer';
import { Product } from '../types/Product';
import { IsArray, IsOptional } from 'class-validator';
export class UpdateCartDto {
  @IsArray()
  @IsOptional()
  @Type(() => Product)
  readonly products?: Array<Product>;
}
