import dotenv from 'dotenv';
import 'reflect-metadata';

dotenv.config();

const config: any = {
  baseUrl: process.env.BASE_URL || 'http://localhost',
  env: process.env.ENV || 'dev',
  port: process.env.PORT || 3000,
};

export default config;
