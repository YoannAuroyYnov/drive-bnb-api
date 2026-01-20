import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { BookingCreatedEvent } from './events/booking-created.event';

@Injectable()
export class BookingsService {
  constructor(private eventEmitter: EventEmitter2) {}

  create(createBookingDto: CreateBookingDto) {
    const booking = { id: '123-456-789', ...createBookingDto }; // Logic to create booking would go here

    const bookingSuccessfullyCreated = true; // Simulate booking creation success
    if (bookingSuccessfullyCreated)
      this.eventEmitter.emit('booking.created', new BookingCreatedEvent(booking.id));
    return `This action adds a new booking for vehicle ${createBookingDto.vehicleId}: ${JSON.stringify(booking)}`;
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
