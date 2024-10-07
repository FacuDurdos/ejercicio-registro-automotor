import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo{
    private nombreduenio:string;
    private modelo:string;
    private deCuatroPuertas:boolean;

    constructor(patente:string,marca:string,anio:number,nombreduenio:string,modelo:string,deCuatroPuertas:boolean) {
        super(patente,marca,anio)
        this.nombreduenio = nombreduenio;
        this.modelo = modelo;
        this.deCuatroPuertas = deCuatroPuertas
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

    getDeCuatroPuertas() {
        return this.deCuatroPuertas;
    }

    setDeCuatroPuertas(deCuatroPuertas:boolean) {
        this.deCuatroPuertas = deCuatroPuertas;
    }
}