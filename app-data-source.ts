import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();
export const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: 'jst',
  entities: ['src/entity/*.js'],
  logging: true,
  synchronize: true,
});
