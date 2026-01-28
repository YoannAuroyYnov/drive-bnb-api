export class BookingCreatedEvent {
  constructor(
    public readonly bookingId: string,
    public readonly clerkUserId: string,
  ) {}
}
