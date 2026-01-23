import { IsOptional, IsIn, IsEnum, IsDate } from 'class-validator';
import { VehicleTypeName } from '../entities/vehicle-types.entity';

export class VehiclesFilterParamsDto {
  @IsEnum(VehicleTypeName)
  type: VehicleTypeName;

  @IsDate()
  from: Date;

  @IsDate()
  to: Date;

  @IsOptional()
  @IsIn(['ASC', 'DESC'])
  order?: 'ASC' | 'DESC' = 'DESC';
}
