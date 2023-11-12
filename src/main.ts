import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: 'https://65512abaef6b6b3536f301b4--spectacular-tiramisu-b201c8.netlify.app/todos', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false,
  };

  app.enableCors(corsOptions);

  
  const port = process.env.PORT;

  await app.listen(port);
}

bootstrap();
