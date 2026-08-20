import chuvaDeMeteoros from "./data/chuvasDeMeteoros.js";
import {chuvasDeHoje, proximasChuvas} from "./funcoes/funcoesLogicas.js"; 

const dataAtual = new Date();            //pegando a data do sistema

const chuvasVistasHoje = chuvaDeMeteoros.filter(chuva => {
    return chuvasDeHoje(chuva, dataAtual);
});

const proximasASeremVistas = chuvaDeMeteoros.filter(chuva => {
return proximasChuvas(chuva, dataAtual);
});

console.log(proximasASeremVistas)