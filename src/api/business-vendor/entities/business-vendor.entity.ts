import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type BusinessVendorDocument = BusinessVendor & Document;

@Schema()
export class LocationSchema {
  @Prop()
  lat: number;

  @Prop()
  lng: number;

  @Prop()
  address: string;
}

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
