import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { VehiclesFilterParamsDto } from './dto/vehicle-filter-params.dto';
import { Booking, BookingStatus } from '../bookings/entities/booking.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
  ) {}

  async findAll(query?: VehiclesFilterParamsDto) {
    const queryBuilder = this.vehicleRepository.createQueryBuilder('vehicle');

    // Toujours charger la relation vehicleType
    queryBuilder.leftJoinAndSelect('vehicle.vehicleType', 'vehicleType');

    // Exclude vehicles that are booked in the given date range
    if (query?.from && query?.to) {
      const bookedVehicleIds = await this.bookingRepository
        .createQueryBuilder('booking')
        .select('booking.vehicle_id')
        .where('booking.start_date < :to', { to: new Date(query.to) })
        .andWhere('booking.end_date > :from', { from: new Date(query.from) })
        .andWhere('booking.status IN (:...statuses)', {
          statuses: [BookingStatus.CONFIRMED, BookingStatus.PENDING],
        })
        .getRawMany();

      const vehicleIds = bookedVehicleIds.map((b: { vehicle_id: string }) => b.vehicle_id);

      if (vehicleIds.length > 0) {
        queryBuilder.andWhere('vehicle.id NOT IN (:...vehicleIds)', {
          vehicleIds,
        });
      }
    }

    // Filter by vehicle type
    if (query?.type) {
      queryBuilder.andWhere('vehicleType.name = :type', { type: query.type });
    }

    queryBuilder.orderBy('vehicle.updatedAt', query?.order || 'DESC');

    return await queryBuilder.getMany();
  }

  async findOne(id: string) {
    return await this.vehicleRepository.findOne({
      where: { id },
      relations: { vehicleType: true, owner: true },
    });
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
