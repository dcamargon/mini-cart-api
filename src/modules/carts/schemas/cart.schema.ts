import { Product } from '../types/Product';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CartDocument = HydratedDocument<Cart>;

@Schema()
export class Cart {
  @Prop()
  cartId: number;

  @Prop()
  cartDate: Date;

  @Prop()
  products: Product[];
}

export const CartSchema = SchemaFactory.createForClass(Cart);
