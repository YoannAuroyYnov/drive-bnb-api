import {
  Controller,
  UseGuards,
  Post,
  Body,
  Req,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RequestMagicLinkDto, VerifyMagicLinkDto, Verify2FADto } from './dto/auth.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';
import { RequestWithUser } from './interfaces/resquest-with-user.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('magic-link/request')
  requestMagicLink(@Body() requestMagicLinkDto: RequestMagicLinkDto) {
    return this.authService.requestMagicLink(requestMagicLinkDto.email);
  }

  @Post('magic-link/verify')
  @HttpCode(HttpStatus.OK)
  verifyMagicLink(@Body() verifyMagicLinkDto: VerifyMagicLinkDto) {
    return this.authService.verifyMagicLink(verifyMagicLinkDto.token);
  }

  @Post('refresh')
  @UseGuards(JwtRefreshGuard)
  @HttpCode(HttpStatus.OK)
  refreshTokens(@Req() req: RequestWithUser) {
    const { userId, refreshToken } = req.user;
    if (!refreshToken) return;

    return this.authService.refreshTokens(userId, refreshToken);
  }

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
