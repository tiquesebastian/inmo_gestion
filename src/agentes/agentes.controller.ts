import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgentesService } from './agentes.service';
import { CreateAgenteDto } from './dto/create-agente.dto';
import { UpdateAgenteDto } from './dto/update-agente.dto';

@Controller('agentes')
export class AgentesController {
  constructor(private readonly agentesService: AgentesService) {}

  @Post()
  create(@Body() createAgenteDto: CreateAgenteDto) {
    return `aqui se va a registrar los agentes`;
  }

  @Get()
  findAll() {
    return "aqui se van a consultar los agentes";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `aqui se va a consultar el agente cuyo id es: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgenteDto: UpdateAgenteDto) {
    return `aqui se va a actualizar el agente cuyo id es: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `aqui se va a eliminar el agente cuyo id es: ${id}`;
  }
}
