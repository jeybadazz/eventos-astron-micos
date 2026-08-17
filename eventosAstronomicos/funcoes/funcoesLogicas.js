import chuvaDeMeteoros from "../data/chuvasDeMeteoros.js";

const dataAtual = new Date();                  //pegando a data atual
const diaAtual = dataAtual.getDate();          //pegando o dia do mes
const mesAtual = dataAtual.getMonth() + 1;     //pegando o mes 
const anoAtual = dataAtual.getFullYear();      //pegando o ano 
const dataFormatada = `${anoAtual}/${mesAtual}/${diaAtual}`;    //formatando a data

const adicionandoAnoInicio = chuvaDeMeteoros.map(chuva => {
    return `${anoAtual}/${chuva.inicio}`;
}); 

const chuvasHoje = chuvaDeMeteoros.filter(chuva => {
    if(dataFormatada >= chuva.inicio && dataFormatada <= chuva.inicio) {
    }
});