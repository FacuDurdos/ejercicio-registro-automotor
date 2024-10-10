import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";

export class RegistroAutomotor {
    private nombre:string;
    private autos:Auto[];
    private motos:Moto[];
    private camiones:Camion[];

    constructor(nombre:string) {
        this.nombre = nombre;
        this.autos = [];
        this.motos = [];
        this.camiones = [];
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre:string) {
        this.nombre = nombre
    }

    agregarAuto(auto:Auto) {
        this.autos.push(auto);
    }

    agregarMoto(moto:Moto) {
        this.motos.push(moto);
    }

    agregarCamion(camion:Camion) {
        this.camiones.push(camion);
    }

    quitarAuto(nombre:string) {
        this.autos = this.autos.filter(auto => auto.getPatente() !== nombre);
    }

    quitarMoto(nombre:string) {
        this.motos = this.motos.filter(moto => moto.getPatente() !== nombre);
    }

    quitarCamion(nombre:string) {
        this.camiones = this.camiones.filter(camion => camion.getPatente() !== nombre);
    }

    getAuto() {
        return this.autos;
    }

    getMoto() {
        return this.motos;
    }

    getCamion() {
        return this.camiones;
    }
}
