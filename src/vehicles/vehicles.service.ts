import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Vehicle } from './entities/vehicle.entity';
import { VehiclesFilterParamsDto } from './dto/vehicle-filter-params.dto';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

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
}
