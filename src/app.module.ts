import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseService } from './DB/database.service';
import { UrlController } from './Url/url.controller';
import { UrlModule } from './Url/url.module';
import { UrlService } from './Url/url.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UrlModule,
  ],
  controllers: [UrlController],
  providers: [DatabaseService, UrlService],
})
export class AppModule {}
