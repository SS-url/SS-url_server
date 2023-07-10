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

@Controller('url')
export class UrlController {
  constructor(private urlService: UrlService) {}

  @Post()
  async create(@Body() originalUrl: string, @Res() res: Response) {
    res.status(HttpStatus.CREATED);
    this.urlService.shorten(originalUrl);
  }

  @Get(':shortenUrl')
  async findOne(@Param('shortenUrl') shortenUrl: string, @Res() res: Response) {
    res.status(HttpStatus.OK);
    this.urlService.findUrl(shortenUrl);
  }
}
