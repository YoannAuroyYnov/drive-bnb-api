import { Module } from '@nestjs/common';
import { VehiclesModule } from './vehicles/vehicles.module';
import { BookingsModule } from './bookings/bookings.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [VehiclesModule, BookingsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
