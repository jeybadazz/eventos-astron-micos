import chuvaDeMeteoros from "../data/chuvasDeMeteoros.js";

const dataAtual = new Date();               //pegando a data do sistema

function chuvasDeHoje(chuva, dataAtual) {
    const anoAtual = dataAtual.getFullYear();
    const dataInicio = new Date(`${chuva.inicio}/${anoAtual}`);
    const dataFim = new Date(`${chuva.fim}/${anoAtual}`);

    if(dataFim < dataInicio){
        if(dataAtual.getMonth() + 1 < dataFim.getMonth() + 1) {
            dataFim.setFullYear(anoAtual - 1);
        } else {
            dataFim.setFullYear(anoAtual + 1);
        }
    }

    return dataAtual >= dataInicio && dataAtual <= dataFim;
}

    function proximasChuvas(chuva, dataAtual){ 
         const anoAtual = dataAtual.getFullYear();       //pegando ano

        const [mesInicio, diaInicio] = chuva.inicio.split('/');    //pegando o mes e o dia da data do array

        const dataInicio = new Date(anoAtual, mesInicio - 1, diaInicio);    //transformando no tipo date
 
        const daquiDoisMeses = new Date(dataAtual);      
        daquiDoisMeses.setMonth(daquiDoisMeses.getMonth() + 2);   //colocando 2 meses na data atual para comparação 

        if( dataInicio < dataAtual) {
            dataInicio.setFullYear(anoAtual + 1)     //verifica se a data atravessa o ano, se sim, adiciona mais um ano para dar certo
        }
 
        return dataInicio <= daquiDoisMeses; 
   }

function formatarIntensidade(thz) {
    if(thz === 1) {
        return fraca;
    } else if(thz === 2) {
        return Media;
    } else if(thz === 3) {
        return Forte;
    } else if(thz > 3) {
        return irregular;
    } else{
        return fraca;
    }
}

function formatarHemisferio(declinacao) {
    if(declinacao >= 0) {
        return Norte;
    } else{
        return Sul;
    }
}

function  formatarPeriodo(inicio) {
    const [dia, mes] = chuva.inicio.split('/');
    const dataInvertida = dia + mes;
    return dataInvertida;
}

export{chuvasDeHoje, proximasChuvas, formatarIntensidade, formatarHemisferio, formatarPeriodo}