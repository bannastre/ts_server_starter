"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
dotenv_1.default.config();
// tslint:disable:object-literal-sort-keys
const pg = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD,
    database: `form_${process.env.ENV}` || 'form_dev',
    synchronize: process.env.DB_SYNCHRONIZE,
    logging: process.env.DB_SCHEMA_LOGGING,
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
module.exports = pg;
//# sourceMappingURL=ormconfig.js.map