"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auto_1 = require("./auto");
var camion_1 = require("./camion");
var moto_1 = require("./moto");
var registroAutomotor_1 = require("./registroAutomotor");
var registro = new registroAutomotor_1.RegistroAutomotor("Registro Automotor Olav");
var camion = new camion_1.Camion("NVZ 087", "Iveco", 2017, "Facundo Durdos", "Cursor 3330", true);
var auto = new auto_1.Auto("CBC 889", "Audi", 2020, "Facundo Durdos", "A8", true);
var moto = new moto_1.Moto("HDQ 154", "Honda", 2018, "Facundo Durdos", "GLH150");
console.log(auto);
