import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {
    private nombreduenio:string;
    private modelo:string;
    private llevaCarga:boolean;

    constructor(patente:string,marca:string,anio:number,nombreduenio:string,modelo:string,llevaCarga:boolean) {
        super(patente,marca,anio)
        this.nombreduenio = nombreduenio;
        this.modelo = modelo;
        this.llevaCarga = llevaCarga
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

    setLlevaCarga() {
        return this.llevaCarga;
    }

    getLlevaCarga(llevaCarga:boolean) {
        this.llevaCarga = llevaCarga;
    }
}