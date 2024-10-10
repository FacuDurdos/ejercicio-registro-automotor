import { Auto } from "./auto";
import { Camion } from "./camion";
import { Moto } from "./moto";
import { RegistroAutomotor } from "./registroAutomotor";

let registro : RegistroAutomotor = new RegistroAutomotor("Registro Automotor Olav");
let camion : Camion = new Camion("NVZ 087","Iveco",2017,"Facundo Durdos","Cursor 3330",true);
let auto : Auto = new Auto("CBC 889","Audi",2020,"Facundo Durdos","A8",true);
let moto : Moto = new Moto("HDQ 154","Honda",2018,"Facundo Durdos","GLH150");

console.log(auto)