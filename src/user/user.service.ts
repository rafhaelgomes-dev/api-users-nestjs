import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public async create({
    email,
    name,
    password,
  }: CreateUserDTO): Promise<{ id: number }> {
    return this.prisma.user.create({
      data: {
        email,
        name,
        password,
      },
      select: {
        id: true,
      },
    });
  }
}
