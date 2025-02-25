import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  url: 'postgres://postgres:root@localhost:5434/properties',
  type: 'postgres',
  port: 5434,
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  synchronize: true,
};
