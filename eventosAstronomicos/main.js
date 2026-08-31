import chuvaDeMeteoros from "./data/chuvasDeMeteoros.js";
import {chuvasDeHoje, proximasChuvas} from "./funcoes/funcoesLogicas.js"; 
import {lista, itemLista} from "./funcoes/funcoesInterface.js";

const dataAtual = new Date();            //pegando a data do sistema

//filtrando o array e retornando as chuvvas que podem ser vistas hoje
const chuvasVistasHoje = chuvaDeMeteoros.filter(chuva => {
    return chuvasDeHoje(chuva, dataAtual);
});                                                                              

//filtrando o array chuvasDeMeteoros e retornando as chuvas que podem ser vistas daqui 2 meses
const proximasASeremVistas = chuvaDeMeteoros.filter(chuva => {
return proximasChuvas(chuva, dataAtual);
});

//exibindo as chuvas que podem ser vistas hoje
console.log("CHUVAS QUE PODEM SER VISTAS HOJE!");
if(chuvasVistasHoje.length > 0) {   
    lista(chuvasVistasHoje);
} else {
    console.log("\nNão há chuvas passando hoje!");     //informa que nao a chuvas hoje
}

//exibe as chuvas que podem ser vistas daqui 2 meses
console.log("\nCHUVAS QUE PODEM SER VISTAS NOS PROXIMOS 2 MESES!");
lista(proximasASeremVistas);