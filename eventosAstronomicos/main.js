import chuvaDeMeteoros from "./data/chuvasDeMeteoros.js";

const dataAtual = new Date();
const dataFormatada = dataAtual.toLocaleDateString("pt-BR");   //pegando a data do sistema
const anoAtual = dataAtual.getFullYear();

let chuvasHoje = chuvaDeMeteoros.filter(chuva => {
    
});

let proximasChuvas = chuvaDeMeteoros(chuva => {
    
});

formatandoDataInicio(chuvaDeMeteoros)