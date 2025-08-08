import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';



@Controller()
export class AppController {

  //endpoint
//un metodo en una clase que maneja una peticion
//y devuelve una respuesta

  @Get()
  getMensaje(): string {
    return 'Aqui se van a consultar los datos';
  }
  @Post()
  //despues de los dos puntos va el tipo de dato de retorno
  //lo que va devolver la funcion return
  crear(): string {
    return 'Aqui se van a registrar los datos';
  }
  @Patch()
  actualizar(): string {
    return 'Aqui se van a actualizar los datos';
  }
  @Delete()
  borrar(): string {
    return 'Aqui se van a eliminar los datos';
  }
}