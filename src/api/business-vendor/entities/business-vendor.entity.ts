import { LocationSchema } from '@/app/shared/entity.shared/Location.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type BusinessVendorDocument = BusinessVendor & Document;

@Schema({ timestamps: true })
export class BusinessVendor {
  @Prop()
  userId: string;

  @Prop()
  serviceId: string;

  @Prop()
  vendorName: string;

  @Prop()
  description: string;

  @Prop()
  location: LocationSchema;

  @Prop()
  avatar: string;

  @Prop()
  cover: string;

  @Prop()
  totalItems: number;

  @Prop()
  totalSales: number;
}

export const BusinessVendorSchema =
  SchemaFactory.createForClass(BusinessVendor);
