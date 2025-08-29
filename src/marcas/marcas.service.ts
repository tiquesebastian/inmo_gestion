import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';

@Injectable()
export class MarcasService {

  constructor(
    private service: PrismaService
  ){}


  create(createMarcaDto: CreateMarcaDto) {
    return 'This action adds a new marca';
  }



  findAll() {
    return this.service.marcas.findMany() ;
  }

  findOne(id: number) {
    return this.service.marcas.findFirst({
      where: {id : id}
    });
  }

  update(id: number, updateMarcaDto: UpdateMarcaDto) {
    return `This action updates a #${id} marca`;
  }

  remove(id: number) {
    return `This action removes a #${id} marca`;
  }
}
