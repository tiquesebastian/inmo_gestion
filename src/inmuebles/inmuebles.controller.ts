import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InmueblesService } from './inmuebles.service';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';

@Controller('inmuebles')
export class InmueblesController {
  constructor(private readonly inmueblesService: InmueblesService) {}

  @Post()
  create(@Body() createInmuebleDto: CreateInmuebleDto) {
    return `aqui se va a registrar los inmuebles`;
  }

  @Get()
  findAll() {
    return "aqui se van a consultar los inmuebles";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `aqui se va a consultar el inmueble cuyo id es: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInmuebleDto: UpdateInmuebleDto) {
    return `aqui se va a actualizar el inmueble cuyo id es: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `aqui se va a eliminar el inmueble cuyo id es: ${id}`;
  }
}
