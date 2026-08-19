import chuvaDeMeteoros from "./data/chuvasDeMeteoros.js";
import {chuvasDeHoje, proximasChuvas, chuvaInicioFormatada, chuvaFimFormatada} from "./funcoes/funcoesLogicas.js"; 

const dataAtual = new Date();               //pegando a data do sistema

const chuvasVistasHoje = chuvaDeMeteoros.filter(chuva => {
    return chuvasDeHoje(chuvaDeMeteoros, dataAtual, chuvaInicioFormatada, chuvaFimFormatada);
});

console.log(chuvasVistasHoje)