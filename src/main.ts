import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as tf from '@tensorflow/tfjs-node';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}


bootstrap();
