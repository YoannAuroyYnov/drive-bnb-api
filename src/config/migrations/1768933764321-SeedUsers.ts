import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedUsers1768933764321 implements MigrationInterface {
  name = 'SeedUsers1768933764321';
  userId = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "users" (id, email, "first_name", "last_name") VALUES ($1, $2, $3, $4)`,
      [this.userId, 'yoann.ar@icloud.com', 'Yoann', 'Ar'],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "users" WHERE id = $1`, [this.userId]);
  }
}
