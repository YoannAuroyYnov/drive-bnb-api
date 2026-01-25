import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedUsers1768933764321 implements MigrationInterface {
  name = 'SeedUsers1768933764321';
  userId = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "users" ("id", "email", "first_name", "last_name", "phone", "rating", "reviews_count") VALUES
      -- Fernando Alonso
      ('b1eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 'fernando.alonso@renault-racing.fr', 'Fernando', 'Alonso', '+34612345678', 4.9, 189),
      
      -- Docteur Emmett Brown
      ('c2eebc99-9c0b-4ef8-bb6d-6bb9bd380a13', 'doc.brown@hillvalley.com', 'Emmett', 'Brown', '+1555-0199', 4.7, 88),
      
      -- Etienne le Bolideur
      ('d3eebc99-9c0b-4ef8-bb6d-6bb9bd380a14', 'etienne.lebolideur@missyl-racing.fr', 'Etienne', 'Le Bolideur', '+33645123789', 5.0, 380),
      
      -- Charles Leclerc
      ('d3eebc99-9c0b-5ef9-bb6d-6bb9bd381b41', 'charles.leclerc@ferrari-monaco.mc', 'Charles', 'Leclerc', '+377612345678', 5.0, 342),
      
      -- Valentino Rossi
      ('e4eebc99-9c0b-4ef8-bb6d-6bb9bd380a15', 'valentino.rossi@vr46racing.it', 'Valentino', 'Rossi', '+393471234567', 4.9, 946),
      
      -- Donald Trump
      ('f5eebc99-9c0b-4ef8-bb6d-6bb9bd380a16', 'donald.trump@trumporg.com', 'Donald', 'Trump', '+12125551234', 3.5, 45),
      
      -- Sebastien Loeb
      ('a6eebc99-9c0b-4ef8-bb6d-6bb9bd380a17', 'sebastien.loeb@dacia-rally.fr', 'Sébastien', 'Loeb', '+33698765432', 4.9, 278),
      
      -- Horacio Pagani
      ('b7eebc99-9c0b-4ef8-bb6d-6bb9bd380a18', 'horacio.pagani@pagani.it', 'Horacio', 'Pagani', '+39051234567', 5.0, 95),
      
      -- Leto Atreides, Duc d'Arrakis
      ('c8eebc99-9c0b-4ef8-bb6d-6bb9bd380a19', 'leto.atreides@house-atreides.ar', 'Leto', 'Atreides', '+10191-001', 4.9, 10191),
      
      -- Théo Pourchaire
      ('d9eebc99-9c0b-4ef8-bb6d-6bb9bd380a20', 'theo.pourchaire@peugeot-sport.fr', 'Théo', 'Pourchaire', '+33612345678', 4.8, 167),

      -- John Rambo, vétéran des Forces Spéciales
      ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'john.rambo@greenberets.mil', 'John', 'Rambo', '+15551234567', 4.7, 82),
      
      -- Daryl Dixon, survivant zombie apocalypse
      ('e5eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'daryl.dixon@survivors.twd', 'Daryl', 'Dixon', '+15555551982', 4.8, 177),
      
      -- Beatrix Kiddo, tueuse à gages / The Bride
      ('f6eebc99-9c0b-4ef8-bb6d-6bb9bd380a22', 'beatrix.kiddo@deav.jp', 'Beatrix', 'Kiddo', '+81355551234', 4.9, 88)
      
      ON CONFLICT (id) DO NOTHING
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('TRUNCATE TABLE "users" CASCADE');
  }
}
