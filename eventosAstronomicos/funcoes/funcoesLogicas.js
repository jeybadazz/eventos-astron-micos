import chuvaDeMeteoros from "../data/chuvasDeMeteoros.js";

const dataAtual = new Date();               //pegando a data do sistema

function chuvasDeHoje(chuva, dataAtual) {
    const anoAtual = dataAtual.getFullYear();
    const dataInicio = new Date(`${chuva.inicio}/${anoAtual}`);
    const dataFim = new Date(`${chuva.fim}/${anoAtual}`);
                                               //funcao que mostra as chuvas de hoje
    if(dataFim < dataInicio){
        if(dataAtual.getMonth() + 1 < dataFim.getMonth() + 1) {
            dataFim.setFullYear(anoAtual - 1);
        } else {
            dataFim.setFullYear(anoAtual + 1);
        }
    }

    return dataAtual >= dataInicio && dataAtual <= dataFim;
}

    function proximasChuvas(chuva, dataAtual){        //funcao que mostra as proximas chuvas daqui 2 meses 
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

function formatarIntensidade(intensidade) {
    if(intensidade.includes("Fraca")) {
        return "(1)Fraca";
    
    }else if(intensidade.includes("Média")) {
        return "(2)Media";

    } else if(intensidade.includes("Forte")) {     //funcao que retorna a força da chuva
        return "(3)Forte";

    } else if(intensidade.includes("Irregular")) {
        return "Irregular";

    } else {
        return "(1)Fraca";
    }
}

function formatarHemisferio(declinacao) {
    if(declinacao >= 0) {
        return Norte;                 //retornando o hemisferio da chuva
    } else{                
        return Sul;
    }
}

function  inverterData(chuva) {
    const [dia, mes] = chuva.inicio.split("/");
                                     //invertendo o dia e o mes
    return `${dia}/${mes}`;
}

export{chuvasDeHoje, proximasChuvas, formatarIntensidade, formatarHemisferio, formatarPeriodo}