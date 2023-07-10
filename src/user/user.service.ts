import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { IUser } from 'src/interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public async create(data: CreateUserDTO): Promise<{ id: number }> {
    return this.prisma.user.create({
      data,
      select: {
        id: true,
      },
    });
  }

  public async get(): Promise<IUser[]> {
    return this.prisma.user.findMany();
  }

  public async getId(id: number): Promise<IUser> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
