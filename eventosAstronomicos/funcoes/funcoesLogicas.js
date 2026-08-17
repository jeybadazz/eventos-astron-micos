import chuvaDeMeteoros from "../data/chuvasDeMeteoros.js";

function chuvasDeHoje(chuvaDeMeteoros, dataAtual) {
    chuvaDeMeteoros.map(chuva => {
        if(dataInicioFormatada >= chuva.inicio && dataInicioFormatada <= chuva.fim){
            return true;
        }
    });
}

export {chuvasDeHoje};