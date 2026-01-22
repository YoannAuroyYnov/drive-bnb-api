# Drive BnB API

Backend API for Drive BnB project.

## Requirements

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [PNPM](https://pnpm.io/) (Package manager)
- [PostgreSQL](https://www.postgresql.org/) (Database)

### Tech Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **ORM**: [TypeORM](https://typeorm.io/)
- **Authentication**: JWT (Passport), Bcrypt
- **Validation**: class-validator

## Installation

```bash
$ pnpm install
```

## Configuration

```bash
# Copy .env.example to .env
$ cp .env.example .env

# Configure environment variables in .env
# DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME, JWT_SECRET, etc.
```

## Database Setup

```bash
# Create PostgreSQL database
$ createdb drive_bnb_db
# then run migrations
$ pnpm migration:up
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Availables endpoints

| -                               | Path                        | Action | Enabled |
| ------------------------------- | --------------------------- | ------ | ------- |
| Index all vehicles              | `/vehicles`                 | GET    | ✅      |
| Show a vehicle                  | `/vehicles/{id}`            | GET    | ✅      |
| Show a user                     | `/users/{id}`               | GET    | ✅      |
| Index all bookings              | `/bookings`                 | GET    | ✅      |
| Show a booking                  | `/bookings/{id}`            | GET    | ✅      |
| Create a booking                | `/bookings`                 | POST   | ✅      |
| Update a booking                | `/bookings/{id}`            | PATCH  | ❌      |
| Delete a booking                | `/bookings/{id}`            | DELETE | ❌      |
| Request a magick link           | `/auth/magic-link/request`  | POST   | ❌      |
| Verify a magick link            | `/auth/magic-link/verify`   | POST   | ✅      |
| Request a refresh of JWT tokens | `/auth/refresh`             | POST   | ✅      |
| Verify 2FA method               | `/auth/2fa/verify`          | POST   | ❌      |
| Enable 2FA method               | `/auth/2fa/enable/:userId`  | POST   | ❌      |
| Disable 2FA method              | `/auth/2fa/disable/:userId` | POST   | ❌      |
