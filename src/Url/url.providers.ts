import { Connection } from 'mongoose';
import { UrlSchema } from './url.schema';

// constants.ts에서 별도로 관리하기
export const urlProviders = [
  {
    provide: 'URL_MODEL',
    useFactory: (connection: Connection) => connection.model('Cat', UrlSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
