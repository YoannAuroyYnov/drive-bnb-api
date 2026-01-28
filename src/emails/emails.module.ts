import { Module } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { BookingCreatedListener } from './listeners/booking-created.listener';
import { ConfigModule } from '@nestjs/config';
import { SmtpEmailProvider } from './providers/smtp-email.provider';
import { BookingsModule } from '../bookings/bookings.module';

@Module({
  imports: [ConfigModule, BookingsModule],
  providers: [EmailsService, BookingCreatedListener, SmtpEmailProvider],
  exports: [EmailsService],
})
export class EmailsModule {}
