import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedVehicles1768935616601 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO vehicles (id, make, model, year, color, license_plate, vehicle_type_id, daily_price, is_available, owner_id, details) VALUES
      -- Lamborghini Revuelto
      (
        005bb13b-19ad-4151-ad2b-3ef55ca43f7a,
        'Lamborghini',
        'Revuelto',
        2024,
        'Verde Mantis',
        'LB-001-RV',
        'c3a2adde-8df8-427c-892a-eb4320f8259c',
        2500.00,
        true,
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        '{"requiredLicense": "Permis B", "fuelType": "Hybride essence", "seats": 2, "mileage": 1200, "description": "Supercar hybride V12 de 1015 ch, première hybride de Lamborghini", "transmission": "Automatique 8 rapports", "doors": 2, "enginePowerHp": 1015}'
      ),
      -- Porsche Taycan
      (
        d5712f88-c192-4bce-aae7-0fbb42425e98,
        'Porsche',
        'Taycan Turbo S',
        2024,
        'Frozen Blue Metallic',
        'PO-002-TC',
        'c3a2adde-8df8-427c-892a-eb4320f8259c',
        850.00,
        true,
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        '{"requiredLicense": "Permis B", "fuelType": "Électrique", "seats": 4, "mileage": 8500, "description": "Berline sportive électrique avec 761 ch et 0-100 km/h en 2,8s", "transmission": "Automatique 2 rapports", "doors": 4, "enginePowerHp": 761}'
      ),
      -- Land Rover Defender V8
      (
        612452c9-6664-4431-bbfc-73fcbcb43acf,
        'Land Rover',
        'Defender 110 V8',
        2023,
        'Carpathian Grey',
        'LR-003-DF',
        'c3a2adde-8df8-427c-892a-eb4320f8259c',
        650.00,
        true,
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        '{"requiredLicense": "Permis B", "fuelType": "Essence", "seats": 7, "mileage": 15000, "description": "SUV tout-terrain V8 5.0L supercharged de 525 ch, capacités off-road exceptionnelles", "transmission": "Automatique 8 rapports", "doors": 5, "enginePowerHp": 525}'
      ),
      -- Ferrari Portofino
      (
        ce635e87-02ed-4234-8985-4575de20bfeb,
        'Ferrari',
        'Portofino M',
        2023,
        'Rosso Corsa',
        'FR-004-PO',
        'c3a2adde-8df8-427c-892a-eb4320f8259c',
        1800.00,
        true,
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        '{"requiredLicense": "Permis B", "fuelType": "Essence", "seats": 4, "mileage": 3500, "description": "GT cabriolet V8 3.9L turbo, 620 ch, toit rétractable rigide", "transmission": "Automatique 8 rapports", "doors": 2, "enginePowerHp": 620}'
      ),
      -- Ferrari F80
      (
        6516bba4-05d9-404a-8a04-bdb4f92c3e06,
        'Ferrari',
        'F80',
        2024,
        'Rosso Fuoco',
        'FR-005-FQ',
        'c3a2adde-8df8-427c-892a-eb4320f8259c',
        5000.00,
        true,
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        '{"requiredLicense": "Permis B", "fuelType": "Hybride essence", "seats": 2, "mileage": 450, "description": "Hypercar hybride V6 1200 ch, dernière supercar de Ferrari limitée à 799 exemplaires", "transmission": "Automatique 8 rapports", "doors": 2, "enginePowerHp": 1200}'
      ),
      -- Pagani Huayra
      (
        827110a7-5134-48e1-9d66-36c13342fd4b,
        'Pagani',
        'Huayra BC',
        2023,
        'Pearl White',
        'PA-006-HU',
        'c3a2adde-8df8-427c-892a-eb4320f8259c',
        8000.00,
        true,
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        '{"requiredLicense": "Permis B", "fuelType": "Essence", "seats": 2, "mileage": 850, "description": "Hypercar italienne V12 AMG 764 ch, aérodynamique active, pièce d artisanat automobile", "transmission": "Séquentielle 7 rapports", "doors": 2, "enginePowerHp": 764}'
      ),
      -- Rolls Royce Cullinan
      (
        8ab2963c-cfa0-402b-8394-70a96e78b373,
        'Rolls-Royce',
        'Cullinan Black Badge',
        2024,
        'Black Diamond',
        'RR-007-CN',
        'c3a2adde-8df8-427c-892a-eb4320f8259c',
        1500.00,
        true,
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        '{"requiredLicense": "Permis B", "fuelType": "Essence", "seats": 5, "mileage": 5000, "description": "SUV ultra-luxe V12 6.75L biturbo 600 ch, summum du confort et de l exclusivité", "transmission": "Automatique 8 rapports", "doors": 5, "enginePowerHp": 600}'
      ),
      -- Dacia Sandrider
      (
        366fdc13-a3ed-44ce-aa63-c0b71f7031a3,
        'Dacia',
        'Sandrider Rally',
        2025,
        'Desert Storm',
        'SNDR-008',
        'c3a2adde-8df8-427c-892a-eb4320f8259c',
        450.00,
        true,
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        '{"requiredLicense": "Permis B", "fuelType": "Hybride essence", "seats": 2, "mileage": 12000, "description": "Véhicule raid hybride inspiré du Dakar, tout-terrain extrême avec 360 ch", "transmission": "Séquentielle 6 rapports", "doors": 2, "enginePowerHp": 360}'
      ),
      -- BMW K 1600 GT
      (
        03c51c22-a2fb-45b8-b91a-c2fa96c6bb39,
        'BMW',
        'K 1600 GT',
        2023,
        'Storm Metallic',
        'BM-009-KS',
        'b8095ab7-49b6-4028-a8fd-fb5ff7a67ce2',
        280.00,
        true,
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        '{"requiredLicense": "Permis A", "fuelType": "Essence", "seats": 2, "mileage": 8500, "description": "Moto de grand tourisme 6 cylindres en ligne 1649cc, 160 ch, confort maximal", "engineCapacityCc": 1649, "licenseCategory": "A2"}'
      ),
      -- Ducati Panigale V4
      (
        cbe1848b-1f32-4f50-af09-a4f0bba6d297,
        'Ducati',
        'Panigale V4 SP2',
        2024,
        'Ducati Red',
        'DU-010-PN',
        'b8095ab7-49b6-4028-a8fd-fb5ff7a67ce2',
        550.00,
        true,
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        '{"requiredLicense": "Permis A", "fuelType": "Essence", "seats": 2, "mileage": 1500, "description": "Superbike racing V4 1103cc 215 ch, technologie MotoGP, piste et route", "engineCapacityCc": 1103, "licenseCategory": "A2"}'
      ),
      -- Triumph Rocket 3
      (
        a1b90dd9-4ea4-44d8-ad13-4be2c7b7e48e,
        'Triumph',
        'Rocket 3 GT',
        2023,
        'Matt Storm Grey',
        'TR-011-RO',
        'b8095ab7-49b6-4028-a8fd-fb5ff7a67ce2',
        320.00,
        true,
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        '{"requiredLicense": "Permis A", "fuelType": "Essence", "seats": 2, "mileage": 5200, "description": "Roadster muscle bike 3 cylindres 2500cc, couple monstre de 221 Nm, plus gros moteur moto", "engineCapacityCc": 2458, "licenseCategory": "A2"}'
      ),
      -- Ornithoptère (Dune)
      (
        6a893432-d23a-454f-add4-ec3df8b2f01e,
        'Atreides Industries',
        'Ornithopter Royal',
        2024,
        'Desert Sand',
        'OE-XOR',
        'e7884fdf-f957-48a1-8214-8435a59ae3e2',
        3500.00,
        true,
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        '{"requiredLicense": "Licence pilote aéronef", "fuelType": "Hydrogène", "seats": 8, "mileage": 2500, "description": "Aéronef à ailes battantes inspiré des ornithoptères de Dune, VTOL et vol atmosphérique", "maxPassengers": 8, "maxRangeKm": 1200}'
      ),
      -- MH-6/AH-6 Little Bird
      (
        c586e47b-95aa-4067-a1b3-55532a76d12a,
        'Boeing',
        'MH-6 Little Bird',
        2022,
        'Military Grey',
        'OE-XLB',
        'e7884fdf-f957-48a1-8214-8435a59ae3e2',
        2200.00,
        true,
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        '{"requiredLicense": "Licence pilote hélicoptère", "fuelType": "Kérosène Jet A", "seats": 2, "mileage": 15000, "description": "Hélicoptère léger militaire compact, utilisé pour reconnaissance et transport rapide", "maxPassengers": 6, "maxRangeKm": 430}'
      )
      ON CONFLICT (license_plate) DO NOTHING
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM vehicles`);
  }
}
