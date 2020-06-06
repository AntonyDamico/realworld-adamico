import { Client } from '../entities/Client';
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const typeOrmConfg: PostgresConnectionOptions = {
    type: 'postgres',
    host:'localhost',
    port: 5432,
    username: 'user',
    password: 'pass',
    database: 'db',
    synchronize: true,
    logging: false,
    entities: [
        Client
    ]
}