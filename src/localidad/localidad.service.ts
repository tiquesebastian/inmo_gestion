import { localidad } from './../../generated/prisma/index.d';
import { Injectable } from '@nestjs/common';
import { CreateLocalidadDto } from './dto/create-localidad.dto';
import { UpdateLocalidadDto } from './dto/update-localidad.dto';

import { PrismaService } from '../prisma/prisma.service'; // Adjust the path as needed

@Injectable()
export class LocalidadService {
  constructor(private prismaService: PrismaService) {}

  // Implementa la creación de una localidad recibiendo el DTO
  async create(localidadDto: CreateLocalidadDto) {
    return await this.prismaService.localidad.create({
      data: {
        nombre_localidad: localidadDto.nombre_localidad,
        // agrega aquí otros campos que tenga tu modelo
      },
    });
  }

  findAll() {
    return `this action returns all localidad`;
  }

  findOne(id: number) {
    return `this action returns a #${id} localidad`;
  }

  update(id: number, updateLocalidadDto: UpdateLocalidadDto) {
    return `This action updates a #${id} localidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} localidad`;
  }
}
