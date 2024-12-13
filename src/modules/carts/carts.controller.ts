import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Query,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto, GetCartDto, UpdateCartDto } from './dto';
import { Cart } from './schemas/cart.schema';
@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Get(':id')
  async findOne(
    @Param('id') id: number,
    @Query('date') date?: number,
  ): Promise<Cart> {
    let getCartDto: GetCartDto = {
      cartId: id,
    };

    if (date !== undefined && !isNaN(date)) {
      getCartDto = {
        ...getCartDto,
        cartDate: new Date(date),
      };
    }
    const cart = await this.cartsService.findOne(getCartDto);
    if (cart === null) {
      throw new NotFoundException();
    }
    return cart;
  }

  @Post()
  async create(@Body() createCartDto: CreateCartDto): Promise<Cart> {
    try {
      return this.cartsService.create(createCartDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCartDto: UpdateCartDto,
  ): Promise<Cart> {
    const cart = await this.cartsService.update(id, updateCartDto);
    if (cart === null) {
      throw new NotFoundException();
    }
    return cart;
  }
}
