import { Type } from 'class-transformer';
import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';

enum VehicleType {
  CAR = 'car',
  MOTORBIKE = 'motorbike',
  HELICOPTER = 'helicopter',
}

class VehicleDetailsDto {
  @IsString()
  @IsOptional()
  requiredLicense?: string;

  @IsString()
  fuelType: string;

  @IsInt()
  @IsOptional()
  @Min(1)
  seats?: number;

  @IsInt()
  @IsOptional()
  @IsPositive()
  mileage?: number;

  @IsString()
  @IsOptional()
  description?: string;
}

class CarDetailsDto extends VehicleDetailsDto {
  @IsString()
  transmission: string;

  @IsInt()
  @IsOptional()
  doors?: number;

  @IsInt()
  @IsOptional()
  @IsPositive()
  @Max(1999)
  enginePowerHp?: number;
}

class MotorbikeDetailsDto extends VehicleDetailsDto {
  @IsInt()
  @IsOptional()
  @IsPositive()
  @Max(3999)
  engineCapacityCc?: number;

  @IsString()
  @IsOptional()
  @IsIn(['A1', 'A2', 'AM'])
  licenseCategory?: 'A1' | 'A2' | 'AM';
}

class HelicopterDetailsDto extends VehicleDetailsDto {
  @IsInt()
  @IsOptional()
  @Min(2)
  maxPassengers?: number;

  @IsInt()
  @IsOptional()
  @IsPositive()
  maxRangeKm?: number;
}

class CreateVehicleDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  make: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  model: string;

  @IsInt()
  @IsPositive()
  @Min(1900)
  @Max(new Date().getFullYear() + 1)
  year: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  color: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  licensePlate: string;

  @IsInt()
  @IsPositive()
  dailyPrice: number;

  isAvailable: boolean;
}

export class CreateCarDto extends CreateVehicleDto {
  @IsString()
  @IsIn([VehicleType.CAR])
  @IsNotEmpty()
  type: VehicleType.CAR;

  @IsObject()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CarDetailsDto)
  details: CarDetailsDto;
}

export class CreateMotorbikeDto extends CreateVehicleDto {
  @IsString()
  @IsIn([VehicleType.MOTORBIKE])
  @IsNotEmpty()
  type: VehicleType.MOTORBIKE;

  @IsObject()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MotorbikeDetailsDto)
  details: MotorbikeDetailsDto;
}

export class CreateHelicopterDto extends CreateVehicleDto {
  @IsString()
  @IsIn([VehicleType.HELICOPTER])
  @IsNotEmpty()
  type: VehicleType.HELICOPTER;

  @IsObject()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => HelicopterDetailsDto)
  details: HelicopterDetailsDto;
}
