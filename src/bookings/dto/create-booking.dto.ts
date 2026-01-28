import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsOptional, IsString, MinDate } from 'class-validator';
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

  @IsString()
  @IsNotEmpty()
  ownerId: string;

  @IsString()
  @IsOptional()
  notes?: string;
}
