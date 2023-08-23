import { BadRequestException, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class UserIdCheckMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    if (isNaN(Number(req.params.id))) {
      throw new BadRequestException('Id inválido!');
    }
    next();
  }
}
