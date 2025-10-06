import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity()
export class Experience {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column({ type: 'varchar', length: 255 })
  @IsString()
  @IsNotEmpty()
  title: string;

  @Column({ type: 'varchar', length: 255 })
  @IsString()
  @IsNotEmpty()
  company: string;

  @Column({ type: 'varchar', length: 255 })
  @IsString()
  @IsNotEmpty()
  location: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  @IsString()
  @IsOptional()
  jobType?: string;

  @Column({ type: 'date' })
  @IsNotEmpty()
  @IsDateString()
  @Index('idx_experience_from_date')
  fromDate: string;

  @Column({ type: 'date', nullable: true })
  @IsOptional()
  @IsDateString()
  toDate?: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  @IsString()
  @IsOptional()
  image?: string;

  @Column({ type: 'boolean', default: false })
  @IsNotEmpty()
  @IsBoolean()
  isCurrent: boolean;

  @Column({ type: 'text', nullable: true })
  @IsString()
  @IsOptional()
  accomplishments?: string;
}
