import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { UrlService } from './url.service';

@Controller('Url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  async create(@Body() originalUrl: string, @Res() res: Response) {
    res.status(HttpStatus.CREATED);
    await this.urlService.shorten(originalUrl);
    res.send('Shortened URL created successfully.');
  }

  @Get(':shortenUrl')
  async findOne(@Param('shortenUrl') shortenUrl: string, @Res() res: Response) {
    res.status(HttpStatus.OK);
    const foundUrl = await this.urlService.findUrl(shortenUrl);
    res.send(foundUrl);
  }
}
