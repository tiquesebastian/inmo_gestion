import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CarsModule } from './cars/cars.module';
import { InmueblesModule } from './inmuebles/inmuebles.module';

import { AgentesModule } from './agentes/agentes.module';

@Module({
  imports: [CarsModule, InmueblesModule, AgentesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
