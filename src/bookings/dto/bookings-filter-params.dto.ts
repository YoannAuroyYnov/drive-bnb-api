import { IsOptional, IsIn, IsEnum } from 'class-validator';
import { BookingStatus } from '../entities/booking.entity';

export class BookingsFilterParamsDto {
  @IsOptional()
  @IsIn(['ASC', 'DESC'])
  order?: 'ASC' | 'DESC' = 'DESC';

  @IsOptional()
  @IsEnum(BookingStatus)
  status?: BookingStatus;
}
