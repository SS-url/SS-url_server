import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from 'src/DB/database.service';
import { UrlController } from './url.controller';
import { Url, UrlSchema } from './url.schema';
import { UrlService } from './url.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }])],
  controllers: [UrlController],
  providers: [UrlService, DatabaseService],
})
export class UrlModule {}
