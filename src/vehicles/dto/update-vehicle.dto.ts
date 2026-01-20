import { PartialType } from '@nestjs/mapped-types';
import {
  CreateCarDto,
  CreateMotorbikeDto,
  CreateHelicopterDto,
} from './create-vehicle.dto';

export class UpdateCarDto extends PartialType(CreateCarDto) {}
export class UpdateMotorbikeDto extends PartialType(CreateMotorbikeDto) {}
export class UpdateHelicopterDto extends PartialType(CreateHelicopterDto) {}
