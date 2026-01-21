import * as bcrypt from 'bcrypt';
import { createHash } from 'crypto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  requestMagicLink(email: string) {
    return `This action requests a magic link for ${email}`;
  }

  async verifyMagicLink(token: string) {
    const email = 'yoann.ar@icloud.com'; // In a real scenario, decode and verify the token
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('User not found');

    return this.generateTokens(user);
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

  async refreshTokens(userId: string, refreshToken: string) {
    const user = await this.usersService.findById(userId);
    if (!user || !user.currentHashedRefreshToken) throw new UnauthorizedException('User not found');

    const { currentHashedRefreshToken } = user;

    const isRefreshTokenMatching = await bcrypt.compare(
      this.hashToken(refreshToken),
      currentHashedRefreshToken,
    );

    if (!isRefreshTokenMatching) throw new UnauthorizedException('Invalid refresh token');

    return this.generateTokens(user);
  }

  private hashToken(token: string): string {
    return createHash('sha256').update(token).digest('hex');
  }

  private async generateTokens(user: User) {
    const payload = {
      sub: user.id,
      email: user.email,
      roles: user.roles,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_ACCESS_TOKEN_SECRET!,
        expiresIn: '15m',
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_REFRESH_TOKEN_SECRET!,
        expiresIn: '7d',
      }),
    ]);

    await this.setCurrentRefreshToken(user.id, refreshToken);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  private async setCurrentRefreshToken(userId: string, refreshToken: string) {
    const tokenHash = this.hashToken(refreshToken);
    const salt = await bcrypt.genSalt();
    const currentHashedRefreshToken = await bcrypt.hash(tokenHash, salt);

    await this.usersService.updateRefreshToken(userId, currentHashedRefreshToken);
  }

  private async getUserIfRefreshTokenMatches(userId: string, refreshToken: string) {
    const user = await this.usersService.findById(userId);
    if (!user || !user.currentHashedRefreshToken) return null;

    const isRefreshTokenMatching = await bcrypt.compare(
      refreshToken,
      user.currentHashedRefreshToken,
    );

    if (isRefreshTokenMatching) return user;
  }

  private removeRefreshToken(userId: string) {
    return this.usersService.updateRefreshToken(userId, null);
  }
}
