import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CarsModule } from './cars/cars.module';
import { InmueblesModule } from './inmuebles/inmuebles.module';

import { AgentesModule } from './agentes/agentes.module';
import { PrismaModule } from './prisma/prisma.module';
import { MarcasModule } from './marcas/marcas.module';
import { LocalidadModule } from './localidad/localidad.module';

@Module({
  imports: [CarsModule, InmueblesModule, AgentesModule, PrismaModule, MarcasModule, LocalidadModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
