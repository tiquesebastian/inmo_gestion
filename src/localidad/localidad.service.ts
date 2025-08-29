import { localidad } from './../../generated/prisma/index.d';
import { Injectable } from '@nestjs/common';
import { CreateLocalidadDto } from './dto/create-localidad.dto';
import { UpdateLocalidadDto } from './dto/update-localidad.dto';

import { PrismaService } from '../prisma/prisma.service'; // Adjust the path as needed

@Injectable()
export class LocalidadService {
  constructor(private readonly prisma: PrismaService) {}

  create(createLocalidadDto: CreateLocalidadDto) {
    return 'This action adds a new localidad';
  }

  findAll() {
    return this.prisma.localidad.findMany();
  }

  findOne(id: number) {
    return this.prisma.localidad.findFirst({
      where: { id: id },
    });
  }

  update(id: number, updateLocalidadDto: UpdateLocalidadDto) {
    return `This action updates a #${id} localidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} localidad`;
  }
}
