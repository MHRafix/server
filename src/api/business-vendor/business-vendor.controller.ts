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
import { BusinessVendorService } from './business-vendor.service';
import { CreateBusinessVendorDto } from './dto/create-business-vendor.dto';
import { UpdateBusinessVendorDto } from './dto/update-business-vendor.dto';

@ApiTags('Business vendors api')
@Controller('business-vendor')
export class BusinessVendorController {
  constructor(private readonly businessVendorService: BusinessVendorService) {}

  @Post()
  create(@Body() payload: CreateBusinessVendorDto) {
    return this.businessVendorService.create(payload);
  }

  @Get()
  findAll() {
    return this.businessVendorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessVendorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() payload: UpdateBusinessVendorDto) {
    return this.businessVendorService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessVendorService.remove(id);
  }
}
