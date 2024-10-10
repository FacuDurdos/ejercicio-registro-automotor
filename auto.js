"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Vehiculo_1 = require("./Vehiculo");
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(patente, marca, anio, nombreduenio, modelo, deCuatroPuertas) {
        var _this = _super.call(this, patente, marca, anio) || this;
        _this.nombreduenio = nombreduenio;
        _this.modelo = modelo;
        _this.deCuatroPuertas = deCuatroPuertas;
        return _this;
    }
    Auto.prototype.getNombre = function () {
        return this.nombreduenio;
    };
    Auto.prototype.setNombre = function (nombre) {
        this.nombreduenio = nombre;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Auto.prototype.getDeCuatroPuertas = function () {
        return this.deCuatroPuertas;
    };
    Auto.prototype.setDeCuatroPuertas = function (deCuatroPuertas) {
        this.deCuatroPuertas = deCuatroPuertas;
    };
    return Auto;
}(Vehiculo_1.Vehiculo));
exports.Auto = Auto;
