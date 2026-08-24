import chuvaDeMeteoros from "./data/chuvasDeMeteoros.js";
import {chuvasDeHoje, proximasChuvas} from "./funcoes/funcoesLogicas.js"; 

const dataAtual = new Date();            //pegando a data do sistema

const chuvasVistasHoje = chuvaDeMeteoros.filter(chuva => {
    return chuvasDeHoje(chuva, dataAtual);
});

const proximasASeremVistas = chuvaDeMeteoros.filter(chuva => {
return proximasChuvas(chuva, dataAtual);
});

console.log("CHUVAS QUE PODEM SER VISTAS HOJE!");
if(chuvasVistasHoje.length > 0) {
    console.log(chuvasVistasHoje);
} else {
    console.log("\nNão há chuvas passando hoje!\n");
}

console.log("CHUVAS QUE PODEM SER VISTAS NOS PROXIMOS 2 MESES!");
console.log(proximasASeremVistas);