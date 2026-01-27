import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { ClerkAuthGuard } from 'src/auth/guards/clerk-auth.guard';

@Controller('payment')
@UseGuards(ClerkAuthGuard, RolesGuard)
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('create-intent')
  async createPaymentIntent(@Body() { amount }: { amount: number }) {
    const paymentIntent = await this.paymentService.createPaymentIntent(amount);

    return { clientSecret: paymentIntent.client_secret };
  }
}
