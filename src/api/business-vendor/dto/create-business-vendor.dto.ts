import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class LocationDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  lat: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  lng: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  address: string;
}

export class CreateBusinessVendorDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  serviceId: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  vendorName: string;

  @ApiProperty({ required: false })
  @IsOptional()
  description: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  location: LocationDto;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  avatar: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  cover: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  totalItems: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  totalSales: number;
}
