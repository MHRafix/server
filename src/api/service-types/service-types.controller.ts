import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateServiceTypeDto } from './dto/create-service-type.dto';
import { UpdateServiceTypeDto } from './dto/update-service-type.dto';
import { ServiceTypesService } from './service-types.service';

@ApiTags('Service types api')
@Controller('service-types')
export class ServiceTypesController {
  constructor(private readonly serviceTypesService: ServiceTypesService) {}

  @Post()
  create(@Body() payload: CreateServiceTypeDto) {
    return this.serviceTypesService.create(payload);
  }

  @Get()
  findAll() {
    return this.serviceTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.serviceTypesService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('id') _id: string, @Body() payload: UpdateServiceTypeDto) {
    return this.serviceTypesService.update(_id, payload);
  }

  @Delete(':id')
  remove(@Param('id') _id: string) {
    return this.serviceTypesService.remove(_id);
  }
}
