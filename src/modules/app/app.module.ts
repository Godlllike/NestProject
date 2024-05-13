import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { ConfigModule} from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import dbConfig from '../../configuration/database.config';
import configuration from 'src/configuration';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration]
  }), 
  SequelizeModule.forRootAsync({
    useFactory: () => dbConfig,
  }),
  UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
