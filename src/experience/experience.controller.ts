import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { ResponseInterface } from 'src/common/interfaces/response.interface';
import { Experience } from './entities/experience.entity';
import { AdminGuard } from 'src/common/guards/admin/admin.guard';

@Controller({ path: 'experience', version: '1' })
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @UseGuards(AdminGuard)
  @Post()
  async create(
    @Body() createExperienceDto: CreateExperienceDto,
  ): Promise<ResponseInterface<Experience>> {
    const experience = await this.experienceService.create(createExperienceDto);
    return {
      data: experience,
      message: 'Experience created successfully',
    };
  }

  @Get()
  async findAll(): Promise<ResponseInterface<Experience[]>> {
    const experiences = await this.experienceService.findAll();
    return {
      data: experiences,
      message: 'Experiences fetched successfully',
    };
  }

  @Get(':id')
  async findOne(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<ResponseInterface<Experience>> {
    const experience = await this.experienceService.findOne(id);
    return {
      data: experience,
      message: 'Experience fetched successfully',
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateExperienceDto: UpdateExperienceDto,
  ): Promise<ResponseInterface<Experience>> {
    const experience = await this.experienceService.update(
      id,
      updateExperienceDto,
    );
    return {
      data: experience,
      message: 'Experience updated successfully',
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ResponseInterface<boolean>> {
    await this.experienceService.remove(id);
    return {
      data: true,
      message: 'Experience deleted successfully',
    };
  }
}
