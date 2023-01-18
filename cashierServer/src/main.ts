import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api/v1');
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Origin',
      'https://cashier-v2-qrsj.vercel.app',
    );
    res.header('content-type', 'application/json');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    res.header('Content-Type', 'application/json');
    console.log(1);
    next();
  });
  console.log(2);
  await app.listen(4000);
}
bootstrap();
