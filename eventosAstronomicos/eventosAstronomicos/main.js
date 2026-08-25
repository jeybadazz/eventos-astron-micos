import chuvaDeMeteoros from "./data/chuvasDeMeteoros.js";
import {chuvasDeHoje, proximasChuvas} from "./funcoes/funcoesLogicas.js"; 

const dataAtual = new Date();            //pegando a data do sistema

const chuvasVistasHoje = chuvaDeMeteoros.filter(chuva => {
    return chuvasDeHoje(chuva, dataAtual);             //retornando as chuvas que podem ser vistas hoje
});

const proximasASeremVistas = chuvaDeMeteoros.filter(chuva => {
return proximasChuvas(chuva, dataAtual);               //retornando chuvas que podem ser vistas daqui 2 meses
});

console.log("CHUVAS QUE PODEM SER VISTAS HOJE!");
if(chuvasVistasHoje.length > 0) {                        //exibe as chuvas de hoje         
    console.log(chuvasVistasHoje);
} else {
    console.log("\nNão há chuvas passando hoje!\n");     //informa q nao a chuvas hoje
}

console.log("CHUVAS QUE PODEM SER VISTAS NOS PROXIMOS 2 MESES!");    //mostra as chuvas daqui 2 meses
console.log(proximasASeremVistas);