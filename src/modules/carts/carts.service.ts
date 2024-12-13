import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from './schemas/cart.schema';
import { CreateCartDto, GetCartDto, UpdateCartDto } from './dto';

@Injectable()
export class CartsService {
  constructor(
    @InjectModel(Cart.name) private readonly cartModel: Model<Cart>,
  ) {}

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    const date = new Date();
    const newCart: Cart = {
      cartId: date.getTime(),
      cartDate: date,
      ...createCartDto,
    };

    const cart = await this.cartModel.create(newCart);
    return cart;
  }

  async findOne(getCartDto: GetCartDto): Promise<Cart | null> {
    const filter = { ...getCartDto };
    const cart = await this.cartModel
      .findOne(filter)
      .sort({ cartDate: 'desc' });
    return cart;
  }

  async update(
    cartId: number,
    updateCartDto: UpdateCartDto,
  ): Promise<Cart | null> {
    const newCart: Cart = {
      cartId,
      cartDate: new Date(),
      products: updateCartDto.products ?? [],
    };
    const cart = await this.cartModel.create(newCart);
    return cart;
  }
}
