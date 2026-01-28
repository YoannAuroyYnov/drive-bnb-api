import { clerkClient } from '@clerk/clerk-sdk-node';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EventListener } from './event-listener.base';
import { EmailsService } from '../emails.service';
import { BookingCreatedEvent } from '../../bookings/events/booking-created.event';
import { BookingsService } from '../../bookings/bookings.service';

@Injectable()
export class BookingCreatedListener extends EventListener {
  constructor(
    emailsService: EmailsService,
    private readonly bookingService: BookingsService,
  ) {
    super(emailsService);
  }

  @OnEvent('booking.created')
  async handle(event: BookingCreatedEvent) {
    const booking = await this.bookingService.findOne(event.bookingId);

    // Récupérer l'utilisateur Clerk qui fait la réservation
    const clerkUser = await clerkClient.users.getUser(event.clerkUserId);

    const context = {
      bookingId: booking.id,
      vehicleName: booking.vehicle.model,
      startDate: new Date(booking.startDate).toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
      }),
      endDate: new Date(booking.endDate).toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
      }),
      // totalPrice: booking.totalPrice, // To be added later
    };

    await this.sendEmail(
      clerkUser.emailAddresses[0].emailAddress,
      'booking-confirmation',
      context,
      'Votre réservation est confirmée !',
    );
  }
}
