import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin: ['https://cashier-v2-qrsj.vercel.app', "http://cashier-v2-qrsj.vercel.app"]});

  app.setGlobalPrefix('api/v1');
  app.enableCors();await app.listen(4000);
}
bootstrap();
