import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async postUser(@Body() body: CreateUserDTO) {
    return this.userService.create(body);
  }

  @Get()
  async getAllUsers() {
    return { users: [] };
  }

  @Get(':id')
  async getOneUser(@Param() param: { id: string }) {
    return {
      id: Number(param.id),
      Nome: 'Rafhael',
      Sobrenome: 'Gomes',
    };
  }
}
