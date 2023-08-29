import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessVendorController } from './business-vendor.controller';
import { BusinessVendorService } from './business-vendor.service';
import {
  BusinessVendor,
  BusinessVendorSchema,
} from './entities/business-vendor.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BusinessVendor.name, schema: BusinessVendorSchema },
    ]),
  ],
  controllers: [BusinessVendorController],
  providers: [BusinessVendorService],
})
export class BusinessVendorModule {}
