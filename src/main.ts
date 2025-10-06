import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ENV_CONSTANTS } from './common/constants/app.constants';
import { LogInterceptor } from './common/interceptors/log/log.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:4200'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips properties not in DTO
      transform: true, // transforms payloads to DTO instances
      forbidNonWhitelisted: true, // throws an error if a property is not in the DTO
    }),
  );

  // Global Filters (if any)

  app.useGlobalInterceptors(new LogInterceptor());

  app.setGlobalPrefix('api');
  app.enableVersioning({ type: VersioningType.URI });

  const configService = app.get(ConfigService);
  await app.listen(configService.get<number>(ENV_CONSTANTS.PORT)!);
}
bootstrap();
