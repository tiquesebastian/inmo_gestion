import { IsNotEmpty, IsNumber } from "class-validator";


export class CreateLocalidadDto {

  @IsNotEmpty({
    message: 'ingresa el nombre el nombre de la localidad'
  })

  nombre_localidad: string;
}
