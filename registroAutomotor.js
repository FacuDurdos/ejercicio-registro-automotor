"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(nombre) {
        this.nombre = nombre;
        this.autos = [];
        this.motos = [];
        this.camiones = [];
    }
    RegistroAutomotor.prototype.getNombre = function () {
        return this.nombre;
    };
    RegistroAutomotor.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    RegistroAutomotor.prototype.agregarAuto = function (auto) {
        this.autos.push(auto);
    };
    RegistroAutomotor.prototype.agregarMoto = function (moto) {
        this.motos.push(moto);
    };
    RegistroAutomotor.prototype.agregarCamion = function (camion) {
        this.camiones.push(camion);
    };
    RegistroAutomotor.prototype.quitarAuto = function (nombre) {
        this.autos = this.autos.filter(function (auto) { return auto.getPatente() !== nombre; });
    };
    RegistroAutomotor.prototype.quitarMoto = function (nombre) {
        this.motos = this.motos.filter(function (moto) { return moto.getPatente() !== nombre; });
    };
    RegistroAutomotor.prototype.quitarCamion = function (nombre) {
        this.camiones = this.camiones.filter(function (camion) { return camion.getPatente() !== nombre; });
    };
    RegistroAutomotor.prototype.getAuto = function () {
        return this.autos;
    };
    RegistroAutomotor.prototype.getMoto = function () {
        return this.motos;
    };
    RegistroAutomotor.prototype.getCamion = function () {
        return this.camiones;
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
