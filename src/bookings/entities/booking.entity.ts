import {
  AfterLoad,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Expose } from 'class-transformer';
import { Vehicle } from '../../vehicles/entities/vehicle.entity';

export enum BookingStatus {
  PENDING = 'pending',
  DRAFT = 'draft',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'start_date', type: 'timestamp' })
  startDate: Date;

  @Column({ name: 'end_date', type: 'timestamp' })
  endDate: Date;

  @Column({ type: 'enum', enum: BookingStatus, default: BookingStatus.PENDING })
  status: BookingStatus;

  @Column({ type: 'text', nullable: true })
  notes?: string;

  @Column({
    name: 'owner_id',
    type: 'varchar',
    default: 'user_38cDXnPLJpQZCuMaGhpISTEtB1m',
  })
  ownerId: string;

  @Expose()
  duration: number;

  @AfterLoad()
  calculateDuration() {
    if (!this.startDate || !this.endDate || this.endDate < this.startDate) return;
    if (this.endDate.toDateString() === this.startDate.toDateString()) return (this.duration = 1);
    const diff = this.endDate.getTime() - this.startDate.getTime();
    this.duration = Math.round(diff / (1000 * 60 * 60 * 24));
  }

  @Expose()
  fees: number;

  @AfterLoad()
  calculateFees() {
    if (!this.vehicle) return;
    if (this.vehicle.id === '8ab2963c-cfa0-402b-8394-70a96e78b373')
      return (this.fees =
        (this.duration < 20 ? this.duration : 20) * (this.vehicle.dailyPrice * 0.2)); // 20% fees for Marine One
    this.fees = (this.duration < 20 ? this.duration : 20) * (this.vehicle.dailyPrice * 0.05); // 5% fees per day max 20 days
  }

  @Expose()
  insurance: number;

  @AfterLoad()
  calculateInsurance() {
    if (!this.vehicle) return;
    this.insurance = this.duration * (this.vehicle.dailyPrice * 0.038); // 3.8% insurance per day
  }

  @Expose()
  subTotal: number;

  @AfterLoad()
  calculateSubTotal() {
    if (!this.vehicle) return;
    this.subTotal = this.duration * this.vehicle.dailyPrice;
  }

  @Expose()
  totalPrice: number;

  @AfterLoad()
  calculateTotalPrice() {
    if (!this.vehicle) return;
    this.totalPrice = this.duration * this.vehicle.dailyPrice + this.insurance + this.fees;
  }

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.bookings, {
    nullable: false,
  })
  @JoinColumn({ name: 'vehicle_id' })
  vehicle: Vehicle;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
