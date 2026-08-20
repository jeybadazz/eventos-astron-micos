import chuvaDeMeteoros from "../data/chuvasDeMeteoros.js";

const dataAtual = new Date();               //pegando a data do sistema

function chuvasDeHoje(chuva, dataAtual) {
    const anoAtual = dataAtual.getFullYear();
    const dataInicio = new Date(`${chuva.inicio}/${anoAtual}`);
    const dataFim = new Date(`${chuva.fim}/${anoAtual}`);

    return dataAtual >= dataInicio && dataAtual <= dataFim;
}

    function proximasChuvas(chuva, dataAtual){ 
        const anoAtual = dataAtual.getFullYear();          //pegando ano atual do sistema
        const mesAtual= dataAtual.getMonth();           //pegando mes atual do sistema

         const dataInicioFormatada = new Date(`${chuva.inicio}/${anoAtual}`);    //formatando data de inicio das chuvas do array


         const pegandoAno = dataInicioFormatada.getFullYear();              //pegando o ano da data do array
        const pegandoMes = dataInicioFormatada.getMonth();                //pegando o mes da data  do array  

        const daquiDoisMeses = dataAtual.getMonth() + 2;    //adicionando 2 meses na data
        if(mesAtual > pegandoMes) {
            pegandoAno + 1;
        }


        return dataAtual < dataInicioFormatada && dataInicioFormatada < daquiDoisMeses;
   }

export{chuvasDeHoje, proximasChuvas}