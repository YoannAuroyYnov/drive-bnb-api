import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { VehiclesFilterParamsDto } from './dto/vehicle-filter-params.dto';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  async findAll(query?: VehiclesFilterParamsDto) {
    const whereConditions = {};
    if (query) {
      whereConditions['vehicleType'] = { name: query.type };
      // Add date range filtering logic here if applicable
    }
    return await this.vehicleRepository.find({
      where: whereConditions,
      order: { updatedAt: query?.order || 'DESC' },
    });
  }

  async findOne(id: string) {
    return await this.vehicleRepository.findOneBy({ id });
  }

  async findFeatured() {
    const ids = [
      '6a893432-d23a-454f-add4-ec3df8b2f01e',
      '03c51c22-a2fb-45b8-b91a-c2fa96c6bb39',
      'd5712f88-c192-4bce-aae7-0fbb42425e98',
    ];
    const result = await this.vehicleRepository.find({
      where: { id: In(ids) },
      order: { updatedAt: 'DESC' },
    });

    return result;
  }
}
