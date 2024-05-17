import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RoomTypeModule } from './room-type/room-type.module';
import { BookingModule } from './booking/booking.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './utills/task-service.service';
import { EventModule } from './event/event.module';
import { PackageModule } from './package/package.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3303,
      username: 'sa',
      password: '1qazZAQ!',
      database: 'muslim_marriage_treat',
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true,
    }),
    ScheduleModule.forRoot(),
    UserModule,
    PackageModule,
    AuthModule,
    RoomTypeModule,
    EventModule,
    BookingModule,
  ],
  controllers: [AppController],
  providers: [ TasksService, AppService],
})
export class AppModule {}
