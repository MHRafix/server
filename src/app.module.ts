import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessVendorModule } from './api/business-vendor/business-vendor.module';
import { ServiceTypesModule } from './api/service-types/service-types.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './app/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: config,
      envFilePath: [
        '.env',
        '.env.local',
        '.env.development',
        '.env.production',
      ],
    }),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_URI),
    // api modules here
    ServiceTypesModule,
    BusinessVendorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
