import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UrlDocument = HydratedDocument<Url>;

@Schema()
export class Url {
  @Prop({ required: true })
  originalLocation: string;

  @Prop()
  shortenLocation: string;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
