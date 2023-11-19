import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APPLICATION_PORT } from '@/constants/app_settings';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { SERVER_START_MESSAGE } from '@/constants/app_messages';
import helmet from 'helmet';
import * as compression from 'compression';

async function bootstrap(): Promise<void> {
  const app: INestApplication = await NestFactory.create(AppModule);

  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet());
  app.use(compression());
  await app.listen(APPLICATION_PORT || 7777);
}

bootstrap()
  .then(() => console.log(SERVER_START_MESSAGE))
  .catch((err) => console.error(`Error starting server: ${err.message}`));
