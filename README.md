# Drive BnB API

Backend API for Drive BnB project.

## Installation

```bash
$ pnpm install
```

## Configuration

```bash
# Copier le fichier .env.example en .env
$ cp .env.example .env

# Configurer les variables d'environnement dans .env
# DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME, JWT_SECRET, etc.
```

## Database Setup

```bash
# Créer la base de données PostgreSQL 
$ createdb drive_bnb_db
# puis lancer les migrations
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
