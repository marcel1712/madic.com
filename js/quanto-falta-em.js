function CalculoQuantoFaltaEMInterdisciplinar(){

        let interdisciplinarEM = Number(interdisciplinarEMInput.value);
        let trimestralEM = Number(trimestralEMInput.value);
        let simuladoEM = Number(simuladoEMInput.value);

        if(simuladoEM == 0 && trimestralEM == 0){
            let quantoFaltaSimuladoEM = (((7-(0.2*interdisciplinarEM))*0.25)/0.2);
            let quantoFaltaTrimestralEM = (((7-(0.2*interdisciplinarEM))*0.75)/0.6);

            return alert(`Você precisa tirar ${quantoFaltaSimuladoEM.toFixed(2)} no simulado e ${quantoFaltaTrimestralEM.toFixed(2)} na trimestral para passar na AV4`);
        }else if(trimestralEM  > 0){
            let quantoFaltaSimuladoEM = (((7-((0.2*interdisciplinarEM) + (0.6*trimestralEM))))/0.2);

            return alert(`Você precisa tirar ${quantoFaltaSimuladoEM.toFixed(2)} no simulado para passar na AV4`);
        }
        else if(simuladoEM > 0){
            
            let quantoFaltaTrimestralEM = ((7 - ((simuladoEM * 0.2)+(interdisciplinarEM * 0.2)))/0.6);
            return alert(`Você precisa tirar ${quantoFaltaTrimestralEM.toFixed(2)} na trimestral para passar na AV4`);
        }
}

function CalculoQuantoFaltaEMSimulado(){

        let interdisciplinarEM = Number(interdisciplinarEMInput.value);
        let trimestralEM = Number(trimestralEMInput.value);
        let simuladoEM = Number(simuladoEMInput.value);

        if(interdisciplinarEM == 0 && trimestralEM == 0){

            let quantoFaltaInterdisciplinarEM = (((7-(0.2*simuladoEM))*0.25)/0.2);
            let quantoFaltaTrimestralEM = (((7-(0.2*simuladoEM))*0.75)/0.6);

            return alert(`Você precisa tirar ${quantoFaltaInterdisciplinarEM.toFixed(2)} na interdisciplina e ${quantoFaltaTrimestralEM.toFixed(2)} na trimestral para passar na AV4`);
        }else if(trimestralEM  > 0){
            let quantoFaltaInterdisciplinarEM = (((7-((0.2*simuladoEM) + (0.6*trimestralEM))))/0.2);

            return alert(`Você precisa tirar ${quantoFaltaInterdisciplinarEM.toFixed(2)} na interdisciplina para passar na AV4`);
        }
        else if(interdisciplinarEM > 0){
            
            let quantoFaltaTrimestralEM = ((7 - ((simuladoEM * 0.2)+(interdisciplinarEM * 0.2)))/0.6);
            return alert(`Você precisa tirar ${quantoFaltaTrimestralEM.toFixed(2)} na trimestral para passar na AV4`);
        }
}

function CalculoQuantoFaltaEMTrimestral(){

    let interdisciplinarEM = Number(interdisciplinarEMInput.value);
    let trimestralEM = Number(trimestralEMInput.value);
    let simuladoEM = Number(simuladoEMInput.value);

    if(interdisciplinarEM == 0 && simuladoEM == 0){

        let quantoFaltaInterdisciplinarEM = (((7-(0.2*simuladoEM))*0.25)/0.2);
        let quantoFaltaSimuladoEM = (((7-(0.2*interdisciplinarEM))*0.25)/0.2);

        return alert(`Você precisa tirar ${quantoFaltaInterdisciplinarEM.toFixed(2)} na interdisciplina e ${quantoFaltaSimuladoEM.toFixed(2)} no simulado para passar na AV4`);
    }else if(interdisciplinarEM > 0){

        let quantoFaltaSimuladoEM = ((7 - ((interdisciplinarEM * 0.2)+(trimestralEM * 0.6)))/0.2);
        return alert(`Você precisa tirar ${quantoFaltaSimuladoEM.toFixed(2)} no simulado para passar na AV4`);

    }else if(simuladoEM > 0){

        let quantoFaltaInterdisciplinarEM = ((7 - ((simuladoEM * 0.2)+(trimestralEM * 0.6)))/0.2);
        return alert(`Você precisa tirar ${quantoFaltaInterdisciplinarEM.toFixed(2)} na interdisciplina para passar na AV4`);
    }

}