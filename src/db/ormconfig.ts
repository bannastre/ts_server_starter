import dotenv from 'dotenv';
import 'reflect-metadata';

dotenv.config();

// tslint:disable:object-literal-sort-keys
const pg: any = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: ((process.env.DB_PORT as unknown) as number) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
  database: `form_${process.env.ENV}` || 'form_dev',
  synchronize: (process.env.DB_SYNCHRONIZE as unknown) as boolean,
  logging: (process.env.DB_SCHEMA_LOGGING as unknown) as boolean,
  schema: process.env.DB_SCHEMA,
  ssl: process.env.DB_SCHEMA_SSL === 'true' ? true : false,
  entities: ['dist/src/db/entities/**/*.js'],
  migrations: ['dist/src/db/migrations/**/*.js'],
  subscribers: ['dist/src/db/subscribers/**/*.js'],
  cli: {
    entitiesDir: 'dist/src/db/entities',
    migrationsDir: 'dist/src/db/migrations',
    subscribersDir: 'dist/src/db/subscribers',
  },
};

export = pg;
