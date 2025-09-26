import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { LocalidadService } from "./localidad.service";
import { CreateLocalidadDto } from "./dto/create-localidad.dto";
import { UpdateLocalidadDto } from "./dto/update-localidad.dto";

@Controller("localidad")
export class LocalidadController {
  constructor(private readonly localidadService: LocalidadService) {}

  @Post()
  create(@Body() localidadDto: CreateLocalidadDto) {
    return this.localidadService.create(localidadDto);
  }

  @Get()
  findAll() {
    return this.localidadService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.localidadService.findOne(Number(id)); // Convertir id a número
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateLocalidadDto: UpdateLocalidadDto
  ) {
    return this.localidadService.update(Number(id), updateLocalidadDto); // Pasa los parámetros
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.localidadService.remove(Number(id)); // Pasa el id convertido a número
  }
}
