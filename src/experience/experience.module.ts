import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExperienceService } from './experience.service';
import { Experience } from './entities/experience.entity';
import { ExperienceController } from './experience.controller';
import { AdminGuard } from 'src/common/guards/admin/admin.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Experience])],
  controllers: [ExperienceController],
  providers: [ExperienceService, AdminGuard],
})
export class ExperienceModule {}
