import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EducationModule } from './education/education.module';
import { ExperienceModule } from './experience/experience.module';

@Module({
  imports: [ExperienceModule, EducationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
