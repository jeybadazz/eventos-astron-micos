import chuvaDeMeteoros from "../data/chuvasDeMeteoros.js";

function formatandoDataInicio(chuvaDeMeteoros){
    chuvaDeMeteoros.map(chuva => {
        const ano = anoAtual;
        const dataInicioFormatada = ano + "/" + chuva.inicio;
        console.log(dataInicioFormatada)
    })
}



function chuvaHoje(chuvaDeMeteoros, dataFormatada){

}

function chuvasSeguintes(chuvaDeMeteoros, dataFormatada){

}