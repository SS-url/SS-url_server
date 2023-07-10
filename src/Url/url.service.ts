import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Url } from './url.schema';
// import { ShortenUrl } from "./shorten-url.dto";

@Injectable()
export class UrlService {
  constructor(@InjectModel('URL_MODEL') private UrlModel: Model<Url>) {}

  async shorten(url: string): Promise<Url> {
    const shortenedUrl = new this.UrlModel(url); // need to update
    return shortenedUrl.save();
  }

  async findUrl(url: string): Promise<Url> {
    return this.UrlModel.findOne(); // need to update
  }
}
