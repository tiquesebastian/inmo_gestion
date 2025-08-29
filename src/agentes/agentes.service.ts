import { Injectable } from '@nestjs/common';
import { CreateAgenteDto } from './dto/create-agente.dto';
import { UpdateAgenteDto } from './dto/update-agente.dto';

import { Agente } from './entities/agente.entity';

@Injectable()
export class AgentesService {

  private Agentes: Agente[] = [
    new Agente(1, 'Juan', 'Pérez', 'juan.perez@example.com', 123456789, 'contraseña123', true),
    new Agente(2, 'María', 'Gómez', 'maria.gomez@example.com', 987654321, 'contraseña456', true),
  ];

  create(createAgenteDto: CreateAgenteDto) {
    return 'This action adds a new agente';
  }

  findAll() {
    return this.Agentes;
  }

  findOne(id: number) {
    return this.Agentes.find(function(agente){
      return agente.id_agente === id;
    });
  }

  update(id: number, updateAgenteDto: UpdateAgenteDto) {
    return `This action updates a #${id} agente`;
  }

  remove(id: number) {
    this.Agentes = this.Agentes.filter(function(agente){
      return agente.id_agente !== id;
    });
  }
}
