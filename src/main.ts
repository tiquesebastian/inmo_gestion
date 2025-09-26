import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //establecer validaciones de formato de rquest:
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //lanza mensaje de error en caso de atributos que no esten en el DTO
      forbidNonWhitelisted: true, //quita atributps que no esten en el DTO
      transform: true, //convierte los datos del request a los tipos de datos que se especifican en el DTO
      }) 
    )
  

  app.enableCors();
  await app.listen(process.env.PORT ?? 3010);

}
bootstrap();
