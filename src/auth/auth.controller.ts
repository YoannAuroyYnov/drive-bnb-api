import { Controller, Post, Body, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  RequestMagicLinkDto,
  VerifyMagicLinkDto,
  Verify2FADto,
} from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('magic-link/request')
  requestMagicLink(@Body() RequestMagicLinkDto: RequestMagicLinkDto) {
    return this.authService.requestMagicLink(RequestMagicLinkDto.email);
  }

  @Post('magic-link/verify')
  verifyMagicLink(@Body() verifyMagicLinkDto: VerifyMagicLinkDto) {
    return this.authService.verifyMagicLink(verifyMagicLinkDto.token);
  }

  @Post('2fa/verify')
  verify2FA(@Body() verify2FADto: Verify2FADto) {
    return this.authService.verify2FA(verify2FADto.token, verify2FADto.code);
  }

  @Post('2fa/enable/:userId')
  enable2FA(@Param('userId') userId: string) {
    return this.authService.enable2FA(userId);
  }

  @Post('2fa/disable/:userId')
  disable2FA(@Param('userId') userId: string) {
    return this.authService.disable2FA(userId);
  }
}
