import {formatarIntensidade, formatarHemisferio, inverterData} from './funcoesLogicas.js';

//funcao de interface 
 function itemLista(chuva) { 
 const intensidade = formatarIntensidade(chuva.intensidade); 
 const hemisferio = formatarHemisferio(chuva.declinacao); 
 const periodo = inverterData(chuva); 
                                     
 console.log(`${chuva.nome} - ${intensidade} - ${hemisferio} - ${periodo}`); 
 } 
 
 //function que exibe de uma forma agradavel
 function lista(chuvas) { 
 console.log('\nNOME - INTENSIDADE - HEMISFÉRIO - PERÍODO'); 
 chuvas.forEach(chuva => itemLista(chuva)); 
 } 

 export {itemLista, lista};