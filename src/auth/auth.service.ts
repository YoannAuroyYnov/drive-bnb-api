import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  requestMagicLink(email: string) {
    return `This action requests a magic link for ${email}`;
  }

  verifyMagicLink(token: string) {
    return `This action verifies a magic link with token ${token}`;
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
