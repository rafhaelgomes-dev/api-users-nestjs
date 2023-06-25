import { Controller, Post, Body, Get, Param } from '@nestjs/common'
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  
  @Post()
  async postUser(@Body() body: CreateUserDTO) {
    return body;
  }

  @Get()
  async getAllUsers() {
    return {users: []}
  }

  @Get(':id')
  async getOneUser(@Param() param: { id: string }) {
    return {
      id: Number(param.id),
      Nome: 'Rafhael',
      Sobrenome: 'Gomes'
    }
  }
}