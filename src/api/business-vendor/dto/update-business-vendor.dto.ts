import { PartialType } from '@nestjs/mapped-types';
import { CreateBusinessVendorDto } from './create-business-vendor.dto';

export class UpdateBusinessVendorDto extends PartialType(
  CreateBusinessVendorDto,
) {}
