import { NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, INestApplication, ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  createSwaggerDoc(app);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector))
  );
  await app.listen(3000);
}

function createSwaggerDoc(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('TP')
    .setDescription('TP')
    .setVersion('1.0')
    .addTag('tp')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
  SwaggerModule.setup('/api', app, document);
}
bootstrap();
