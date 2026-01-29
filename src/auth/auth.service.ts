import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  requestMagicLink(email: string) {
    return `This action requests a magic link for ${email}`;
  }

  verify2FA(userId: string, code: string) {
    return `This action verifies 2FA for user ${userId} with code ${code}`;
  }

  enable2FA(userId: string) {
    return `This action enables 2FA for user ${userId}`;
  }

  disable2FA(userId: string) {
    return `This action disables 2FA for user ${userId}`;
  }
}
