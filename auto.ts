export class Auto {
    private nombreDueño:string;
    private modelo:string;
    private patente:string;

    constructor(nombreDueño:string, modelo:string, patente:string) {
        this.nombreDueño = nombreDueño;
        this.modelo = modelo;
        this.patente = patente;
    }

    getNombre() {
        return this.nombreDueño;
    }

    setNombre(nombre:string) {
        this.nombreDueño = nombre;
    }

    getModelo() {
        return this.modelo;
    }

    setModelo(modelo:string) {
        this.modelo = modelo;
    }

    getPatente() {
        return this.patente;
    }

    setPatente(patente:string) {
        this.patente = patente;
    }
}