import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Url } from './url.schema';

@Injectable()
export class UrlService {
  constructor(@InjectModel(Url.name) private readonly UrlModel: Model<Url>) {}

  async shorten(url: string): Promise<Url> {
    const shortenedUrl = new this.UrlModel({ url });
    return shortenedUrl.save();
  }

  async findUrl(url: string): Promise<Url> {
    return this.UrlModel.findOne({ url });
  }
}
