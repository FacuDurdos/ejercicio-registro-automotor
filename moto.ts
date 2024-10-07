import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {
    private nombreduenio:string;
    private modelo:string;

    constructor(patente:string,marca:string,anio:number,nombreduenio:string,modelo:string) {
        super(patente,marca,anio)
        this.nombreduenio = nombreduenio;
        this.modelo = modelo;
    }

    getNombre() {
        return this.nombreduenio;
    }

    setNombre(nombre:string) {
        this.nombreduenio = nombre;
    }

    getModelo() {
        return this.modelo;
    }

    setModelo(modelo:string) {
        this.modelo = modelo;
    }
}