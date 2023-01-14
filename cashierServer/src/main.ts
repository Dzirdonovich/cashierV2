import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors({origin: 'https://cashier-v2-qrsj.vercel.app/'});
  await app.listen(4000);
}
bootstrap();
