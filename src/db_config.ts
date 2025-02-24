import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  url: 'postgres://postgres:postgress@localhost:5434/test_db',
  type: 'postgres',
  port: 5434,
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  synchronize: true,
};
