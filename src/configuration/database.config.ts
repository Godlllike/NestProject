import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { config } from 'dotenv';
config();

const dbConfig: SequelizeModuleOptions = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    autoLoadModels: true,
    models: []
};

export default dbConfig;