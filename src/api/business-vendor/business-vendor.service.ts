import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBusinessVendorDto } from './dto/create-business-vendor.dto';
import { UpdateBusinessVendorDto } from './dto/update-business-vendor.dto';
import {
  BusinessVendor,
  BusinessVendorDocument,
} from './entities/business-vendor.entity';

@Injectable()
export class BusinessVendorService {
  constructor(
    @InjectModel(BusinessVendor.name)
    private businessVendorModel: Model<BusinessVendorDocument>,
  ) {}

  async create(payload: CreateBusinessVendorDto) {
    try {
      await this.businessVendorModel.create(payload);
      return { isCreated: true };
    } catch (err) {
      return new ForbiddenException();
    }
  }

  findAll() {
    try {
      return this.businessVendorModel.find({});
    } catch (err) {
      return new ForbiddenException();
    }
  }

  async findVendorsByServiceId(_id: string) {
    try {
      const vendors = await this.businessVendorModel.find({});
      const filteredVendors = vendors.filter((v) => v.serviceId === _id);
      return filteredVendors;
    } catch (err) {
      return new ForbiddenException();
    }
  }

  async update(_id: string, payload: UpdateBusinessVendorDto) {
    try {
      await this.businessVendorModel.findByIdAndUpdate({ _id }, payload);
      return {
        isUpdated: true,
      };
    } catch (err) {
      return new ForbiddenException();
    }
  }

  async remove(_id: string) {
    try {
      await this.businessVendorModel.deleteOne({
        _id,
      });
      return { isDeleted: true };
    } catch (err) {
      return new ForbiddenException();
    }
  }
}
