export class Agente {



    //metodo constructor: metodo que se ejecuta 
    //automaticamente cuando se crea un objeto de la clase
    //new sirve para dar valores iniciales  a los atributos en clase

    constructor(private _id_agente: number,
                private _nombre_agente: string,
                private _apellido_agente: string,
                private _email_agente: string,
                private _telefono_agente: number,
                private _contraseña_agente: string,
                private _estado_agente: boolean
                ){}

    //metodos accesores(getters): permiten acceder a los atributos privados de la clase

    public get id_agente(): number {
        return this._id_agente;
    }

    public get nombre_agente(): string {
        return this._nombre_agente;
    }

    public get apellido_agente(): string {
        return this._apellido_agente;
    }

    public get email_agente(): string {
        return this._email_agente;
    }

    public get telefono_agente(): number {
        return this._telefono_agente;
    }

    public get contraseña_agente(): string {
        return this._contraseña_agente;
    }

    public get estado_agente(): boolean {
        return this._estado_agente;
    }



}
