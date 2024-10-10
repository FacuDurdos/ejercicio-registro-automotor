"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(patente, marca, anio) {
        this.patente = patente;
        this.marca = marca;
        this.anio = anio;
    }
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.getAnio = function () {
        return this.anio;
    };
    Vehiculo.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
