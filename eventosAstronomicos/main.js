import chuvaDeMeteoros from "./data/chuvasDeMeteoros.js";
import {chuvasDeHoje, proximasChuvas, chuvaInicioFormatada, chuvaFimFormatada, dataAtual} from "./funcoes/funcoesLogicas.js"; 

const chuvasVistasHoje = chuvaDeMeteoros.filter(chuva => {
    return chuvasDeHoje(chuva, dataAtual);
});

console.log(chuvasVistasHoje)