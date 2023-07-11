import { NestFactory } from '@nestjs/core';
import { DatabaseService } from './DB/database.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const databaseService = app.get(DatabaseService);

  // Connect to MongoDB
  await databaseService.connect(process.env.MONGODB_URI, 'SsUrlShortener');

  // Start the Nest.js application
  await app.listen(3000);
}
bootstrap();
