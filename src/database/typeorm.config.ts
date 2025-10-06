import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Experience } from '../experience/entities/experience.entity';
import { Education } from '../education/entities/education.entity';

export const buildTypeOrmOptions = (
  databaseUrl: string,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  url: databaseUrl,
  entities: [Experience, Education],
  // in dev:
  synchronize: true,
  // in prod:
  // synchronize: false,
  // migrations: ['dist/migrations/*.js'],
});
