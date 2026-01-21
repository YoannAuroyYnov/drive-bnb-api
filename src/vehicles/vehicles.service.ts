import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateCarDto, CreateMotorbikeDto, CreateHelicopterDto } from './dto/create-vehicle.dto';
import { UpdateCarDto, UpdateMotorbikeDto, UpdateHelicopterDto } from './dto/update-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';
import { VehiclesFilterParamsDto } from './dto/vehicle-filter-params.dto';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  create(createVehicleDto: CreateCarDto | CreateMotorbikeDto | CreateHelicopterDto) {
    return `This action adds a new ${createVehicleDto.type}`;
  }

  async findAll(query: VehiclesFilterParamsDto) {
    const whereConditions = { isAvailable: query.isAvailable };
    if (query.type) {
      whereConditions['vehicleType'] = { name: query.type };
    }
    return await this.vehicleRepository.find({
      where: whereConditions,
      order: { updatedAt: query.order },
    });
  }

  async findOne(id: string) {
    return await this.vehicleRepository.findOneBy({ id });
  }

  update(id: string, updateVehicleDto: UpdateCarDto | UpdateMotorbikeDto | UpdateHelicopterDto) {
    return `This action updates a #${id} ${updateVehicleDto.type}`;
  }

  remove(id: string) {
    return `This action removes a #${id} vehicle`;
  }
}
