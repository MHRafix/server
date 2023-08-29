import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class LocationSchema {
  @Prop()
  lat: number;

  @Prop()
  lng: number;

  @Prop()
  address: string;
}

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
