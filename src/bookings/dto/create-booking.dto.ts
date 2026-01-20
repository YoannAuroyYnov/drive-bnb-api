import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinDate,
} from 'class-validator';

export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
}

export class CreateBookingDto {
  @IsString()
  @IsNotEmpty()
  vehicleId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  @MinDate(new Date())
  startDate: Date;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  @MinDate(new Date())
  endDate: Date;

  @IsEnum(BookingStatus)
  @IsOptional()
  status?: BookingStatus;

  @IsString()
  @IsOptional()
  notes?: string;
}
