// Nest imports
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

// Local imports
import { AppModule } from './app.module';
import { urlencoded, json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prefix = (app.get(ConfigService)).get('API_PREFIX');
  const port = (app.get(ConfigService)).get('PORT');
  app.enableCors();
  app.setGlobalPrefix(prefix);
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false,
    }),
  );
  const logger = new Logger('App');
  logger.log(`Server running on port: ${port}`);
  await app.listen(port);
}
bootstrap();
