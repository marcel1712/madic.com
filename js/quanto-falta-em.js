function CalculoQuantoFaltaEMInterdisciplinar(){

        let interdisciplinarEM = Number(interdisciplinarEMInput.value);
        let trimestralEM = Number(trimestralEMInput.value);
        let simuladoEM = Number(simuladoEMInput.value);

        verficarValoresInvalidos(trimestralEM);
        verficarValoresInvalidos(interdisciplinarEM)
        verficarValoresInvalidos(simuladoEM)

        if(simuladoEM == 0){
        
            let quantoFaltaTrimestralEM = (7 - (interdisciplinarEM * 0.2))*1.25;
            let quantoFaltaSimuladoEM = (7 - (interdisciplinarEM * 0.2))*1.25;
            return alert(`${quantoFaltaTrimestralEM} e ${quantoFaltaSimuladoEM}`);
        }else if(simuladoEM > 0){
            
            let quantoFaltaTrimestralEM = ((7 - ((simuladoEM * 0.2)+(interdisciplinarEM * 0.2)))*(7/4.2)+0.001);
            return alert(`Você precisa tirar ${quantoFaltaTrimestralEM.toFixed(2)} na trimestral para passar na AV4`);
        }
}

function CalculoQuantoFaltaEMSimulado(){

        let interdisciplinarEM = Number(interdisciplinarEMInput.value);
        let trimestralEM = Number(trimestralEMInput.value);
        let simuladoEM = Number(simuladoEMInput.value);

        verficarValoresInvalidos(interdisciplinarEM)
        verficarValoresInvalidos(simuladoEM)

        if(interdisciplinarEM == 0){
        
            let quantoFaltaTrimestralEM = (7 - (simuladoEM * 0.2))*1.25;
            let quantoFaltaInterdisciplinarEM = (7 - (simuladoEM * 0.2))*1.25;
            return alert(`${quantoFaltaTrimestralEM} e ${quantoFaltaInterdisciplinarEM}`);
        }else if(interdisciplinarEM > 0){
            
            let quantoFaltaTrimestralEM = ((7 - ((simuladoEM * 0.2)+(interdisciplinarEM * 0.2)))*(7/4.2)+0.001);
            return alert(`Você precisa tirar ${quantoFaltaTrimestralEM.toFixed(2)} na trimestral para passar na AV4`);
        }
}

function CalculoQuantoFaltaEMTrimestral(){
    
}


function verficarValoresInvalidos(valor){
    if (valor > 10 || valor < 0){
        alert ('Valor invalido');
        return;
    }
}