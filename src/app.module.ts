import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true, 
    }),
    MongooseModule.forRoot('mongodb+srv://bekajorjikia:zuva2224@cluster0.q6tmfiw.mongodb.net/?retryWrites=true&w=majority'),
    TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
