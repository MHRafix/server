import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ServiceTypesDocument = ServiceTypes & Document;

export enum SERVICE_STATUS {
  PUBLISHED = 'PUBLISHED',
  BLOCKED = 'BLOCKED',
  PAUSED = 'PAUSED',
}

@Schema({ timestamps: true })
export class ServiceTypes {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: SERVICE_STATUS.PUBLISHED })
  status: SERVICE_STATUS;

  @Prop({
    required: true,
    default:
      'https://res.cloudinary.com/coderxone/image/upload/v1692805560/tii88l4dkfkfgjxxltdt.png',
  })
  image: string;

  @Prop()
  itemsCount: number;
}

export const ServiceTypesSchema = SchemaFactory.createForClass(ServiceTypes);
