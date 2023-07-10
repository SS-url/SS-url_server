import { Module } from '@nestjs/common';
import { UrlController } from './Url/url.controller';
import { UrlModule } from './Url/url.module';
import { UrlService } from './Url/url.service';
@Module({
  imports: [UrlModule],
  controllers: [UrlController],
  providers: [UrlService],
})
export class AppModule {}
