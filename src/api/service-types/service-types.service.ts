import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateServiceTypeDto } from './dto/create-service-type.dto';
import { UpdateServiceTypeDto } from './dto/update-service-type.dto';
import {
  ServiceTypes,
  ServiceTypesDocument,
} from './entities/service-type.entity';

@Injectable()
export class ServiceTypesService {
  constructor(
    @InjectModel(ServiceTypes.name)
    private serviceTypesModel: Model<ServiceTypesDocument>,
  ) {}
  async create(payload: CreateServiceTypeDto) {
    try {
      await this.serviceTypesModel.create(payload);
      return { isCreated: true };
    } catch (err) {
      return new ForbiddenException();
    }
  }

  findAll() {
    return this.serviceTypesModel.find({});
  }

  findOne(_id: string) {
    return this.serviceTypesModel.findById({ _id });
  }

  async update(_id: string, payload: UpdateServiceTypeDto) {
    try {
      await this.serviceTypesModel.findByIdAndUpdate({ _id }, payload);
      return { isUpdated: true };
    } catch (err) {
      return new ForbiddenException();
    }
  }

  async remove(_id: string) {
    try {
      await this.serviceTypesModel.deleteOne({
        _id,
      });
      return { isDeleted: true };
    } catch (err) {
      return new ForbiddenException();
    }
  }
}
