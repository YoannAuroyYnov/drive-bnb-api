import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingsService {
  create(createBookingDto: CreateBookingDto) {
    return (
      'This action adds a new booking for vehicle ' + createBookingDto.vehicleId
    );
  }

  findAll() {
    return `This action returns all bookings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking for vehicle ${updateBookingDto.vehicleId}`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
