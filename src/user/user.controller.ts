import { Controller, Post, Body } from '@nestjs/common'

@Controller('users')
export class UserController {
  
  @Post()
  async postUser(@Body() body) {
    return {body};
  }
}