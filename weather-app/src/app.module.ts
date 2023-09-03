import { Module } from '@nestjs/common';
import { WeatherController } from './controller/index';
import { WeatherService } from './service/index';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule.forRoot(),HttpModule],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class AppModule {}
