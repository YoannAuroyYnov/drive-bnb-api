import { IsOptional, IsIn, IsEnum, IsBoolean } from 'class-validator';
import { VehicleTypeName } from '../entities/vehicle-types.entity';

export class VehiclesFilterParamsDto {
  @IsOptional()
  @IsEnum(VehicleTypeName)
  type?: VehicleTypeName;

  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @IsOptional()
  @IsIn(['ASC', 'DESC'])
  order?: 'ASC' | 'DESC' = 'DESC';
}
