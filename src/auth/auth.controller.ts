import { Controller, UseGuards, Post, Body, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Verify2FADto } from './dto/auth.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('2fa/verify')
  @UseGuards(JwtAuthGuard)
  verify2FA(@Body() verify2FADto: Verify2FADto) {
    return this.authService.verify2FA(verify2FADto.token, verify2FADto.code);
  }

  @Post('2fa/enable/:userId')
  @UseGuards(JwtAuthGuard)
  enable2FA(@Param('userId') userId: string) {
    return this.authService.enable2FA(userId);
  }

  @Post('2fa/disable/:userId')
  @UseGuards(JwtAuthGuard)
  disable2FA(@Param('userId') userId: string) {
    return this.authService.disable2FA(userId);
  }
}
