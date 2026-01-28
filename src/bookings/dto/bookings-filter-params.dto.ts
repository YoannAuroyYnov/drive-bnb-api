import { IsOptional, IsIn, IsEnum, IsString } from 'class-validator';
import { BookingStatus } from '../entities/booking.entity';

export class BookingsFilterParamsDto {
  @IsOptional()
  @IsIn(['ASC', 'DESC'])
  order?: 'ASC' | 'DESC' = 'DESC';

  @IsOptional()
  @IsEnum(BookingStatus)
  status?: BookingStatus;

  @IsOptional()
  @IsString()
  userId?: string;
}
