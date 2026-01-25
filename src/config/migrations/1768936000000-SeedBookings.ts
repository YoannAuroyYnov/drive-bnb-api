import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedBookings1768936000000 implements MigrationInterface {
  name = 'SeedBookings1768936000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "bookings" ("id", "start_date", "end_date", "status", "notes", "vehicle_id", "user_id", "created_at", "updated_at") VALUES
      -- PENDING: Rambo réserve le MH-6 Little Bird
      (
        'a1111111-1111-4111-a111-111111111111',
        '2026-02-10 10:00:00',
        '2026-02-15 18:00:00',
        'pending',
        'Mission de reconnaissance en attente de confirmation.',
        'c586e47b-95aa-4067-a1b3-55532a76d12a',
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        NOW(),
        NOW()
      ),
      
      -- DRAFT: Daryl Dixon envisage la CB750
      (
        'b2222222-2222-4222-b222-222222222222',
        '2026-03-01 08:00:00',
        '2026-03-05 20:00:00',
        'draft',
        'Raid à travers les Appalaches - à confirmer selon météo.',
        '03c51c22-a2fb-45b8-b91a-c2fa96c6bb39',
        'e5eebc99-9c0b-4ef8-bb6d-6bb9bd380a21',
        NOW(),
        NOW()
      ),
      
      -- CONFIRMED: Beatrix Kiddo confirme la Kawasaki ZZR 250
      (
        'c3333333-3333-4333-c333-333333333333',
        '2026-01-28 09:00:00',
        '2026-02-02 18:00:00',
        'confirmed',
        'Tour du Japon confirmé. Rendez-vous à Tokyo.',
        'cbe1848b-1f32-4f50-af09-a4f0bba6d297',
        'f6eebc99-9c0b-4ef8-bb6d-6bb9bd380a22',
        NOW(),
        NOW()
      ),
      
      -- CANCELLED: Donald Trump annule Marine One
      (
        'd4444444-4444-4444-d444-444444444444',
        '2026-02-20 14:00:00',
        '2026-02-21 16:00:00',
        'cancelled',
        'Changement de programme. Vol annulé.',
        '8ab2963c-cfa0-402b-8394-70a96e78b373',
        'f5eebc99-9c0b-4ef8-bb6d-6bb9bd380a16',
        NOW(),
        NOW()
      ),
      
      -- COMPLETED: Sebastien Loeb a terminé son raid Sandrider
      (
        'e5555555-5555-4555-e555-555555555555',
        '2026-01-10 07:00:00',
        '2026-01-20 19:00:00',
        'completed',
        'Rallye Dakar simulation terminé avec succès. Véhicule en excellent état.',
        '366fdc13-a3ed-44ce-aa63-c0b71f7031a3',
        'a6eebc99-9c0b-4ef8-bb6d-6bb9bd380a17',
        NOW(),
        NOW()
      )
      
      ON CONFLICT (id) DO NOTHING
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('TRUNCATE TABLE "bookings" CASCADE');
  }
}
