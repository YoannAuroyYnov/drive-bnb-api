import { Module } from '@nestjs/common';
import { VehiclesModule } from './vehicles/vehicles.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [VehiclesModule, BookingsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
