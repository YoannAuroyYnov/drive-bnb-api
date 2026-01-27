import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  private stripe: Stripe;

  constructor(configService: ConfigService) {
    this.stripe = new Stripe(configService.get<string>('STRIPE_API_KEY')!, {
      apiVersion: '2025-12-15.clover',
    });
  }

  async createPaymentIntent(amount: number) {
    return this.stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert euros to cents
      currency: 'eur',
    });
  }
}
