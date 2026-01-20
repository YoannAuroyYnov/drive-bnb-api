import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EventListener } from './event-listener.base';
import { EmailsService } from '../emails.service';
import { BookingCreatedEvent } from '../../bookings/events/booking-created.event';

@Injectable()
export class BookingCreatedListener extends EventListener {
  constructor(
    emailsService: EmailsService,
    // private readonly bookingRepository: BookingRepository,
  ) {
    super(emailsService);
  }

  @OnEvent('booking.created')
  async handle(event: BookingCreatedEvent) {
    const booking = {
      id: event.bookingId,
      user: { email: 'user@example.com' },
      vehicle: { model: 'Aventador' },
      startDate: new Date('2025-03-06'),
      endDate: new Date('2025-03-10'),
    }; // await this.bookingRepository.findById(event.bookingId).includeUserAndVehicle();

    const context = {
      bookingId: booking.id,
      vehicleName: booking.vehicle.model,
      startDate: booking.startDate,
      endDate: booking.endDate,
      subject: 'Votre réservation est confirmée !',
    };

    await this.sendEmail(booking.user.email, 'booking-confirmation', context, context.subject);
  }
}
