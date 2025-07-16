import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: join(__dirname, '..', '..', 'data', 'database.sqlite'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, 
  logging: process.env.NODE_ENV !== 'production',
}; 