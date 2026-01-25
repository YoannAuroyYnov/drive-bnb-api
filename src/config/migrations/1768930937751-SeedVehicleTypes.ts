import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedVehicleTypes1768930937751 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO vehicle_types (id, name, description) VALUES
      ('c3a2adde-8df8-427c-892a-eb4320f8259c', 'car', 'Automobiles'),
      ('b8095ab7-49b6-4028-a8fd-fb5ff7a67ce2', 'motorbike', 'Motos et scooters'),
      ('e7884fdf-f957-48a1-8214-8435a59ae3e2', 'helicopter', 'Hélicoptères')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`TRUNCATE TABLE "vehicle_types" CASCADE`);
  }
}
