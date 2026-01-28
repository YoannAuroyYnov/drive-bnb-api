import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { AuthModule } from 'src/auth/auth.module';
import { Vehicle } from './entities/vehicle.entity';
import { Booking } from '../bookings/entities/booking.entity';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Vehicle, Booking])],
  controllers: [VehiclesController],
  providers: [VehiclesService],
})
export class VehiclesModule {}
