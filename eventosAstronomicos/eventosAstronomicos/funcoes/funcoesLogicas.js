import chuvaDeMeteoros from "../data/chuvasDeMeteoros.js";


const dataAtual = new Date();               //pegando a data do sistema
const anoAtual = dataAtual.getFullYear();    //pegando o ano data data atual
const mesAtual = dataAtual.getMonth();       //pegando o mes da data atual
const diaAtual = dataAtual.getDate();        //pegando o dia do mes da data atual
const dataComparacao = dataAtual + 2;        //data daqui 2 meses para a funcao

const chuvaInicioFormatada = chuvaDeMeteoros.map(chuva => {
    const novaDataInicio = new Date(`${anoAtual}/${chuva.inicio}`);
    return novaDataInicio;              //adicionando ano na data de inicio das chuvas
});

const chuvaFimFormatada = chuvaDeMeteoros.map(chuva => {
    const novaDataFim = new Date(`${anoAtual}/${chuva.inicio}`);
    return novaDataFim;              //adicionando ano na data de Fim das chuvas
});

function chuvasDeHoje(chuvaDeMeteoros, dataAtual, chuvaInicioFormatada, chuvaFimFormatada) {
      let anoFim = anoAtual;
    
      chuvaDeMeteoros.filter(chuva => {
        if(chuva.inicio > chuva.fim) {      //funcao que filtra as chuvas de hj
            anoFim = anoAtual + 1;
        } else if(dataAtual >= chuvaInicioFormatada && dataAtual <= chuvaFimFormatada){
            return true;
        } 
    }); 
}

function proximasChuvas(chuvaDeMeteoros, dataAtual, chuvaInicioFormatada, chuvaFimFormatada){
    chuvaDeMeteoros.filter(chuva => {
       const mesChuva = chuva.substring(0, 1);

        if(mesAtual > mesChuva){
            anoAtual++                   //funcao q filtra chuvasdaqui 2 meses
        }

        else if(dataAtual < chuvaInicioFormatada && dataComparacao > chuvaInicioFormatada ){
            true;
        }
    });
}

export{chuvasDeHoje, proximasChuvas}