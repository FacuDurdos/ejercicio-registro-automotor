export class Vehiculo {
    protected patente: string;
    protected marca: string;
    protected anio: number;

    constructor(patente:string, marca:string, anio:number) {
        this.patente = patente;
        this.marca = marca; 
        this.anio = anio;
    }

    getPatente() {
        return this.patente;
    }

    setPatente(patente:string) {
        this.patente = patente;
    }

    getMarca() {
        return this.marca;
    }

    setMarca(marca:string) {
        this.marca = marca;
    }

    getAnio() {
        return this.anio;
    }

    setAnio(anio:number) {
        this.anio = anio;
    }
}