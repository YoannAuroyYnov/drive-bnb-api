import { Injectable } from '@nestjs/common';
import {
  CreateCarDto,
  CreateMotorbikeDto,
  CreateHelicopterDto,
} from './dto/create-vehicle.dto';
import {
  UpdateCarDto,
  UpdateMotorbikeDto,
  UpdateHelicopterDto,
} from './dto/update-vehicle.dto';

@Injectable()
export class VehiclesService {
  create(
    createVehicleDto: CreateCarDto | CreateMotorbikeDto | CreateHelicopterDto,
  ) {
    return `This action adds a new ${createVehicleDto.type}`;
  }

  findAll() {
    return `This action returns all vehicles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicle`;
  }

  update(
    id: number,
    updateVehicleDto: UpdateCarDto | UpdateMotorbikeDto | UpdateHelicopterDto,
  ) {
    return `This action updates a #${id} ${updateVehicleDto.type}`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicle`;
  }
}
