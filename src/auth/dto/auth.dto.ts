import { IsEmail, IsString, Length } from 'class-validator';

export class RequestMagicLinkDto {
  @IsEmail()
  email: string;
}

export class VerifyMagicLinkDto {
  @IsString()
  token: string;
}

export class Verify2FADto {
  @IsString()
  token: string;

  @IsString()
  @Length(6, 6)
  code: string;
}
