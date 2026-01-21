import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
// import { BookingCreatedEvent } from './events/booking-created.event';
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
      user: { id: createBookingDto.userId },
    });
    const isBookingSuccessfullyCreated = await this.bookingRepository.save(booking);

    // if (isBookingSuccessfullyCreated)
    //   this.eventEmitter.emit('booking.created', new BookingCreatedEvent(booking.id));

    const pendingBooking = await this.bookingRepository.findOneOrFail({
      where: { id: isBookingSuccessfullyCreated.id },
      relations: ['vehicle'],
    });

    return pendingBooking;
  }

  findAll(query: BookingsFilterParamsDto) {
    const whereConditions = { status: query.status };

    return this.bookingRepository.find({
      where: whereConditions,
      order: { updatedAt: query.order },
      relations: ['vehicle', 'user'],
    });
  }

  async findOne(id: string) {
    return await this.bookingRepository.findOne({
      where: { id },
      relations: ['vehicle'],
    });
  }

  update(id: string, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking for vehicle ${updateBookingDto.vehicleId}`;
  }

  remove(id: string) {
    return `This action removes a #${id} booking`;
  }
}
