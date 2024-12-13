import { Type } from 'class-transformer';
import { Product } from '../types/Product';
import { IsArray, IsNotEmptyObject, ArrayMinSize } from 'class-validator';
export class CreateCartDto {
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => Product)
  @IsNotEmptyObject(
    {
      nullable: false,
    },
    {
      each: true,
    },
  )
  readonly products: Array<Product>;
}
