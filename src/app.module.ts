import { Module } from '@nestjs/common';
import { VehiclesModule } from './vehicles/vehicles.module';
import { BookingsModule } from './bookings/bookings.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [VehiclesModule, BookingsModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
