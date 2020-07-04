import { createConnection } from 'typeorm';
import dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

createConnection({
  name: 'default',
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  synchronize: true,
  logging: true,
  entities: [join(__dirname, `../modules/**/*Entity.{ts,js}`)],
  // entities: [join(__dirname, `../**/*.js`)],
});
