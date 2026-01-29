import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { VehicleTypes } from './vehicle-types.entity';
import { Owner } from '../../users/entities/owner.entity';
import { Booking } from '../../bookings/entities/booking.entity';

interface VehicleDetails {
  requiredLicense?: string;
  fuelType: string;
  seats?: number;
  mileage?: number;
  description?: string;
}

export interface CarDetails extends VehicleDetails {
  transmission: string;
  doors?: number;
  enginePowerHp?: number;
}

export interface MotorbikeDetails extends VehicleDetails {
  engineCapacityCc?: number;
  licenseCategory?: 'A1' | 'A2' | 'AM';
}

export interface HelicopterDetails extends VehicleDetails {
  maxPassengers?: number;
  maxRangeKm?: number;
}

@Entity('vehicles')
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  make: string;

  @Column({ type: 'varchar', length: 100 })
  model: string;

  @Column({ type: 'int' })
  year: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  color?: string;

  @Column({ name: 'license_plate', type: 'varchar', length: 50, unique: true })
  licensePlate: string;

  @Column({ name: 'daily_price', type: 'decimal', precision: 10, scale: 2 })
  dailyPrice: number;

  @Column({ name: 'is_available', type: 'boolean', default: true })
  isAvailable: boolean;

  @Column({ type: 'jsonb' })
  details: CarDetails | MotorbikeDetails | HelicopterDetails;

  @Column({ type: 'varchar', length: 50, default: 'Paris, FR' })
  location: string;

  @Column({ type: 'float', default: 5.0 })
  rating: number;

  @Column({ name: 'reviews_count', type: 'int', default: 0 })
  reviewsCount: number;

  @Column({ name: 'image_url', type: 'text', nullable: true })
  imageUrl?: string;

  // Added timestamps

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // Relations

  @ManyToOne(() => VehicleTypes, (vehicleType) => vehicleType.vehicles, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'vehicle_type_id' })
  vehicleType: VehicleTypes;

  @ManyToOne(() => Owner, (owner) => owner.vehicles, {
    nullable: false,
  })
  @JoinColumn({ name: 'owner_id' })
  owner: Owner;

  @OneToMany(() => Booking, (booking) => booking.vehicle)
  @JoinColumn()
  bookings: Booking[];
}
