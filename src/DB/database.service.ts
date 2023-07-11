import { Injectable } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';

@Injectable()
export class DatabaseService {
  private db: Db;

  async connect(url: string, dbName: string): Promise<void> {
    const client = new MongoClient(url);

    try {
      await client.connect();
      this.db = client.db(dbName);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
    }
  }

  getDb(): Db {
    return this.db;
  }
}
