import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import { LogInterceptor } from 'src/interceptors/interceptor';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @UseInterceptors(LogInterceptor)
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
