import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Vehicle } from '../../vehicles/entities/vehicle.entity';

export enum ownerRoles {
  STANDARD = 'standard',
  OWNER = 'owner',
  ADMIN = 'admin',
}
@Entity('owners')
export class Owner {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name', type: 'varchar', length: 100, nullable: true })
  firstName?: string;

  @Column({ name: 'last_name', type: 'varchar', length: 100, nullable: true })
  lastName?: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone?: string;

  @Column({ type: 'float', default: 5.0 })
  rating: number;

  @Column({ name: 'reviews_count', type: 'int', default: 0 })
  reviewsCount: number;

  @Column({ name: 'is_2fa_enabled', type: 'boolean', default: false })
  is2FAEnabled: boolean;

  @Column({
    name: 'current_hashed_refresh_token',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  currentHashedRefreshToken?: string;

  @Column({
    type: 'enum',
    enum: ownerRoles,
    array: true,
    default: [ownerRoles.STANDARD],
  })
  roles: ownerRoles[];

  @OneToMany(() => Vehicle, (vehicle) => vehicle.owner)
  vehicles: Vehicle[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
