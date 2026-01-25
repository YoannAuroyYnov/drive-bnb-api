import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedVehicles1768935616601 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO vehicles (id, make, model, year, color, license_plate, vehicle_type_id, daily_price, is_available, owner_id, details, location, rating, reviews_count, image_url) VALUES
      -- Peugeot 9x8 Hybrid Hypercar
      (
        '005bb13b-19ad-4151-ad2b-3ef55ca43f7a',
        'Peugeot',
        '9x8 Hybrid Hypercar',
        2024,
        'Selenium Grey / Kryptonite',
        'LM94',
        'c3a2adde-8df8-427c-892a-eb4320f8259c',
        3500.00,
        true,
        'd9eebc99-9c0b-4ef8-bb6d-6bb9bd380a20',
        '{"requiredLicense": "Licence Pilote FIA", "fuelType": "Hybride essence", "seats": 1, "mileage": 3000, "description": "Hypercar d endurance du WEC. V6 biturbo 2.6L hybride, 680 ch, design sans aileron arrière distinctif.", "transmission": "Séquentielle 7 rapports", "doors": 2, "enginePowerHp": 680}',
        'Le Mans, FR',
        4.8,
        55,
        '/vehicles/9x8.webp'
      ),
      -- Renault F1 R25
      (
        'd5712f88-c192-4bce-aae7-0fbb42425e98',
        'Renault F1',
        'R25',
        2005,
        'Jaune et Bleu',
        'R25',
        'c3a2adde-8df8-427c-892a-eb4320f8259c',
        12000.00,
        true,
        'b1eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
        '{"requiredLicense": "Super Licence FIA", "fuelType": "Elf Racing Gas", "seats": 1, "mileage": 5000, "description": "Formule 1 championne du monde 2005 (Fernando Alonso). Moteur V10 atmosphérique 3.0L RS25, plus de 900 ch à 19 000 tr/min. Le summum du son F1.", "transmission": "Séquentielle 7 rapports", "doors": 0, "enginePowerHp": 930}',
        'Viry-Châtillon, FR',
        5.0,
        2005,
        '/vehicles/r25.webp'
      ),
      -- DeLorean DMC-12 Time Machine
      (
        '612452c9-6664-4431-bbfc-73fcbcb43acf',
        'DeLorean',
        'DMC-12 Time Machine',
        1981,
        'Stainless Steel',
        'OUTATIME',
        'c3a2adde-8df8-427c-892a-eb4320f8259c',
        8800.00,
        true,
        'c2eebc99-9c0b-4ef8-bb6d-6bb9bd380a13',
        '{"requiredLicense": "Permis B", "fuelType": "Plutonium / Déchets", "seats": 2, "mileage": 88000, "description": "La légendaire machine à voyager dans le temps de Doc Brown. Convecteur temporel inclus. Attention : s active à 88 mph.", "transmission": "Manuelle 5 rapports", "doors": 2, "enginePowerHp": 130}',
        'Hill Valley, CA',
        4.6,
        1985,
        '/vehicles/delorean.webp'
      ),
      -- Vega Missyl
      (
        'ce635e87-02ed-4234-8985-4575de20bfeb',
        'Custom',
        'Vega Missyl',
        1995,
        'Gris Nuancé',
        '8896 SW 78',
        'c3a2adde-8df8-427c-892a-eb4320f8259c',
        930.00,
        true,
        'd3eebc99-9c0b-4ef8-bb6d-6bb9bd380a14',
        '{"requiredLicense": "Permis B", "fuelType": "Essence", "seats": 4, "mileage": 380400, "description": "La légendaire Vega Missyl d Etienne le Bolideur. Attention à l accélération, elle a failli taper le 380 sur le parking. Ne pas confondre la jauge d essence avec le compteur de vitesse.", "transmission": "Manuelle", "doors": 4, "enginePowerHp": 930}',
        'Les Ardennes, FR',
        4.4,
        78400,
        '/vehicles/missyl.webp'
      ),
      -- Ferrari F80
      (
        '6516bba4-05d9-404a-8a04-bdb4f92c3e06',
        'Ferrari',
        'F80',
        2024,
        'Rosso Fuoco',
        'FR-005-FQ',
        'c3a2adde-8df8-427c-892a-eb4320f8259c',
        5000.00,
        true,
        'd3eebc99-9c0b-5ef9-bb6d-6bb9bd381b41',
        '{"requiredLicense": "Permis B", "fuelType": "Hybride essence", "seats": 2, "mileage": 450, "description": "Hypercar hybride V6 1200 ch, dernière supercar de Ferrari limitée à 799 exemplaires", "transmission": "Automatique 8 rapports", "doors": 2, "enginePowerHp": 1200}',
        'Monaco, MC',
        5.0,
        2, 
        '/vehicles/f80.webp'
      ),
      -- Pagani Utopia
      (
        '827110a7-5134-48e1-9d66-36c13342fd4b',
        'Pagani',
        'Utopia',
        2025,
        'Carbon Exposed',
        'PA-006-UT',
        'c3a2adde-8df8-427c-892a-eb4320f8259c',
        9500.00,
        true,
        'b7eebc99-9c0b-4ef8-bb6d-6bb9bd380a18',
        '{"requiredLicense": "Permis B", "fuelType": "Essence", "seats": 2, "mileage": 300, "description": "L art automobile pur : V12 biturbo AMG 864 ch, boîte manuelle 7 rapports, zéro hybridation. Une sculpture roulante.", "transmission": "Manuelle 7 rapports", "doors": 2, "enginePowerHp": 864}',
        'Modena, IT',
        5.0,
        123,
        '/vehicles/utopia.webp'
      ),
      -- Marine One (Sikorsky VH-3D Sea King)
      (
        '8ab2963c-cfa0-402b-8394-70a96e78b373',
        'Sikorsky',
        'VH-3D Sea King (Marine One)',
        2010,
        'Dark Green / White',
        'MARINE-1',
        'e7884fdf-f957-48a1-8214-8435a59ae3e2',
        15000.00,
        true,
        'f5eebc99-9c0b-4ef8-bb6d-6bb9bd380a16',
        '{"requiredLicense": "Licence pilote hélicoptère", "fuelType": "Kérosène Jet A", "seats": 14, "mileage": 5000, "description": "L hélicoptère présidentiel officiel des États-Unis. Sécurité maximale, intérieur ultra-luxe. Le transport le plus sécurisé au monde.", "maxPassengers": 14, "maxRangeKm": 1000}',
        'Washington, DC',
        3.0,
        1,
        '/vehicles/marine-one.webp'
      ),
      -- Dacia Sandrider
      (
        '366fdc13-a3ed-44ce-aa63-c0b71f7031a3',
        'Dacia',
        'Sandrider Rally',
        2025,
        'Desert Storm',
        'SNDR-008',
        'c3a2adde-8df8-427c-892a-eb4320f8259c',
        450.00,
        true,
        'a6eebc99-9c0b-4ef8-bb6d-6bb9bd380a17',
        '{"requiredLicense": "Permis B", "fuelType": "Hybride essence", "seats": 2, "mileage": 12000, "description": "Véhicule raid hybride inspiré du Dakar, tout-terrain extrême avec 360 ch", "transmission": "Séquentielle 6 rapports", "doors": 2, "enginePowerHp": 360}',
        'Nice, FR',
        4.2,
        45,
        '/vehicles/sandrider.webp'
      ),
      -- Honda CB750 Nighthawk (Daryl Dixon TWD)
      (
        '03c51c22-a2fb-45b8-b91a-c2fa96c6bb39',
        'Honda',
        'CB750 (Daryl Custom)',
        1992,
        'Rusted Metal',
        'TWD-DIXON',
        'b8095ab7-49b6-4028-a8fd-fb5ff7a67ce2',
        450.00,
        true,
        'e5eebc99-9c0b-4ef8-bb6d-6bb9bd380a21',
        '{"requiredLicense": "Permis A", "fuelType": "Essence", "seats": 1, "mileage": 50000, "description": "La légendaire moto de Daryl Dixon (The Walking Dead). Support d arbalète, sacoches en cuir usé et look post-apocalyptique authentique.", "engineCapacityCc": 750, "licenseCategory": "A"}',
        'Atlanta, US',
        4.4,
        85,
        '/vehicles/cb750.webp'
      ),
       -- Kawasaki ZZR 250 (Kill Bill)
      (
        'cbe1848b-1f32-4f50-af09-a4f0bba6d297',
        'Kawasaki',
        'ZZR 250 (The Bride)',
        2002,
        'Bright Yellow',
        'KILL-BILL',
        'b8095ab7-49b6-4028-a8fd-fb5ff7a67ce2',
        180.00,
        true,
        'f6eebc99-9c0b-4ef8-bb6d-6bb9bd380a22',
        '{"requiredLicense": "Permis A2", "fuelType": "Essence", "seats": 2, "mileage": 42000, "description": "La moto jaune iconique de The Bride (Uma Thurman) dans Kill Bill. Idéale pour sillonner les rues de Tokyo la nuit. Sabre non fourni.", "engineCapacityCc": 248, "licenseCategory": "A2"}',
        'Tokyo, JP',
        4.2,
        88,
        '/vehicles/zzr250.webp'
      ),
      -- Yamaha YZF-R1 (Valentino Rossi)
      (
        'a1b90dd9-4ea4-44d8-ad13-4be2c7b7e48e',
        'Yamaha',
        'YZF-R1 VR46',
        2018,
        'Movistar Yamaha Blue',
        'VR46-DOCTOR',
        'b8095ab7-49b6-4028-a8fd-fb5ff7a67ce2',
        550.00,
        true,
        'e4eebc99-9c0b-4ef8-bb6d-6bb9bd380a15',
        '{"requiredLicense": "Permis A", "fuelType": "Essence", "seats": 1, "mileage": 4600, "description": "Réplique officielle de la M1 de Valentino Rossi. Numéro 46 jaune fluo, autographe sur le réservoir. Une légende du MotoGP sur route ouverte.", "engineCapacityCc": 998, "licenseCategory": "A"}',
        'Tavullia, IT',
        4.8,
        46,
        '/vehicles/r1vr46.webp'
      ),
      -- Ornithoptère (Dune)
      (
        '6a893432-d23a-454f-add4-ec3df8b2f01e',
        'Atreides Industries',
        'Ornithopter Royal',
        2024,
        'Desert Sand',
        'OE-XOR',
        'e7884fdf-f957-48a1-8214-8435a59ae3e2',
        3500.00,
        true,
        'c8eebc99-9c0b-4ef8-bb6d-6bb9bd380a19',
        '{"requiredLicense": "Licence pilote aéronef", "fuelType": "Hydrogène", "seats": 8, "mileage": 2500, "description": "Aéronef à ailes battantes inspiré des ornithoptères de Dune, VTOL et vol atmosphérique", "maxPassengers": 8, "maxRangeKm": 1200}',
        'Arrakis',
        4.9,
        5,
        '/vehicles/ornithopter.webp'
      ),
      -- MH-6/AH-6 Little Bird
      (
        'c586e47b-95aa-4067-a1b3-55532a76d12a',
        'Boeing',
        'MH-6 Little Bird',
        2022,
        'Military Grey',
        'OE-XLB',
        'e7884fdf-f957-48a1-8214-8435a59ae3e2',
        2200.00,
        true,
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        '{"requiredLicense": "Licence pilote hélicoptère", "fuelType": "Kérosène Jet A", "seats": 4, "mileage": 15000, "description": "Hélicoptère léger militaire compact, utilisé pour reconnaissance et transport rapide", "maxPassengers": 6, "maxRangeKm": 430}',
        'Washington, DC',
        4.0,
        1,
        '/vehicles/mh-6.webp'
      )
      ON CONFLICT (license_plate) DO NOTHING
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // On doit d'abord supprimer les réservations liées pour éviter l'erreur de clé étrangère
    await queryRunner.query(`DELETE FROM bookings`);
    await queryRunner.query(`DELETE FROM vehicles`);
  }
}
