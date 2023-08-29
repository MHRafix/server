import { ApiProperty } from '@nestjs/swagger';

import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { SERVICE_STATUS } from '../entities/service-type.entity';

export class CreateServiceTypeDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  description: string;

  @ApiProperty({
    enum: SERVICE_STATUS,
  })
  @IsOptional()
  @IsEnum(SERVICE_STATUS)
  status: SERVICE_STATUS;

  @ApiProperty({ required: false })
  @IsOptional()
  image: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  vendorCount: number;
}
