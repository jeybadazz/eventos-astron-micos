import chuvaDeMeteoros from "./data/chuvasDeMeteoros.js";
import {chuvasDeHoje, proximasChuvas} from "./funcoes/funcoesLogicas.js"; 

const dataAtual = new Date();               //pegando a data do sistema

const chuvasVistasHoje = chuvaDeMeteoros.filter(chuva => {
    return chuvasDeHoje(chuvaDeMeteoros, dataAtual);
});

console.log(chuvasVistasHoje)