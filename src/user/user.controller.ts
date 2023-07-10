import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
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
    return this.userService.get();
  }

  @Get(':id')
  async getOneUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getId(id);
  }
}
