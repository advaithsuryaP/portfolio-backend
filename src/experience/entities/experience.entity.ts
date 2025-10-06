import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Experience {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column({ type: 'varchar', length: 255 })
  @IsString()
  title: string;

  @Column({ type: 'varchar', length: 255 })
  @IsString()
  company: string;

  @Column({ type: 'date' })
  @IsDateString()
  fromDate: string;

  @Column({ type: 'date', nullable: true })
  @IsOptional()
  @IsDateString()
  toDate?: string;

  @Column({ type: 'varchar', length: 255 })
  @IsString()
  location: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  @IsString()
  @IsOptional()
  jobType?: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  @IsString()
  @IsOptional()
  image?: string;

  @Column({ type: 'text', nullable: true })
  @IsString()
  @IsOptional()
  accomplishments?: string;
}
