import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { BookingCreatedEvent } from './events/booking-created.event';
import { Booking, BookingStatus } from './entities/booking.entity';
import { BookingsFilterParamsDto } from './dto/bookings-filter-params.dto';

@Injectable()
export class BookingsService {
  constructor(
    private eventEmitter: EventEmitter2,
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
  ) {}

  async create(createBookingDto: CreateBookingDto) {
    const booking = this.bookingRepository.create({
      ...createBookingDto,
      status: BookingStatus.PENDING,
      vehicle: { id: createBookingDto.vehicleId },
    });
    const isBookingSuccessfullyCreated = await this.bookingRepository.save(booking);

    const pendingBooking = await this.bookingRepository.findOneOrFail({
      where: { id: isBookingSuccessfullyCreated.id },
      relations: ['vehicle'],
    });

    return pendingBooking;
  }

  async findAll(query: BookingsFilterParamsDto) {
    const whereConditions = { status: query.status, ownerId: query.userId };

    return this.bookingRepository.find({
      where: whereConditions,
      order: { updatedAt: query.order },
      relations: ['vehicle'],
    });
  }

  async findOne(id: string) {
    const booking = await this.bookingRepository.findOneOrFail({
      where: { id },
      relations: ['vehicle'],
    });

    return booking;
  }

  async confirm(id: string, userId: string) {
    const booking = await this.bookingRepository.findOneByOrFail({ id });
    booking.status = BookingStatus.CONFIRMED;

    if (booking.status === BookingStatus.CONFIRMED) {
      this.eventEmitter.emit('booking.created', new BookingCreatedEvent(booking.id, userId));

      await this.bookingRepository.save(booking);
    }
    return booking;
  }

  async update(id: string, updateBookingDto: UpdateBookingDto) {
    const booking = await this.bookingRepository.preload({
      id,
      ...updateBookingDto,
    });
    if (!booking) throw new NotFoundException(`Booking with ID ${id} not found`);

    await this.bookingRepository.save(booking);
    return booking;
  }

  async remove(id: string) {
    await this.bookingRepository.findOneByOrFail({ id });
    return await this.bookingRepository.delete(id);
  }
}
