import chuvaDeMeteoros from "./data/chuvasDeMeteoros.js";
import {chuvasDeHoje} from "./funcoes/funcoesLogicas.js";

const dataAtual = new Date();                 //pegando data do sistema
const DiaAtual = dataAtual.getDate();         //pegando dia do sistema
const mesAtual = dataAtual.getMonth() + 1;    //pegando mes do sistema
const anoAtual = dataAtual.getFullYear();     //pegando ano do sistema

let dataInicioFormatada = `${anoAtual}/${mesAtual}/${DiaAtual}`;    //formatando data  aa/mm/dd

    const arrayInicio = chuvaDeMeteoros.map(chuva => {
    let novaData = `${anoAtual}/${chuva.inicio}`;  //formatando as datas de inicio do array
    return novaData;
});

    const arrayFim = chuvaDeMeteoros.map(chuva => {
    let novaData = `${anoAtual}/${chuva.fim}`;  //formatando as datas de fim do array
    return novaData;
});

const chuvasHoje = chuvaDeMeteoros.filter(chuva => {
    return chuvasDeHoje(chuva)
});

console.log(chuvasHoje);
