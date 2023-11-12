import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: 'https://funny-fox-23d964.netlify.app/', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false,
  };

  app.enableCors(corsOptions);

  
  const port = process.env.PORT;

  await app.listen(port);
}

bootstrap();
