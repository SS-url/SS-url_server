import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/DB/database.module';
import { UrlController } from './url.controller';
import { urlProviders } from './url.providers';
import { UrlService } from './url.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UrlController],
  providers: [UrlService, ...urlProviders],
})
export class UrlModule {}
