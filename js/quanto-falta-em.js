function CalculoQuantoFaltaAVIEM(){

        let av1EMInput = document.querySelector('#av1-EM');
        let av2EMInput = document.querySelector('#av2-EM');
        let av3EMInput = document.querySelector('#av3-EM');

        console.log(`alert`)

        let av1EM = Number(av1EMInput.value); //interdisciplinar -> multipla escolha 20%
        let av2EM = Number(av2EMInput.value); // trimestral -> prova específica 60%
        let av3EM = Number(av3EMInput.value); //personalizado -> personalizado 20%

        if(av3EM == 0 && av2EM == 0){
            let quantoFaltaAV3EM = (((7-(0.2*av1EM))*0.25)/0.2);
            let quantoFaltaAV2EM = (((7-(0.2*av1EM))*0.75)/0.6);

            return alert(`Você precisa tirar ${quantoFaltaAV3EM.toFixed(2)} no simulado personalizado e ${quantoFaltaAV2EM.toFixed(2)} na trimestral para passar na AV4`);
        }else if(av2EM  > 0){
            let quantoFaltaAV3EM = (((7-((0.2*av1EM) + (0.6*av2EM))))/0.2);

            return alert(`Você precisa tirar ${quantoFaltaAV3EM.toFixed(2)} no simulado  para passar na AV4`);
        }
        else if(av3EM > 0){
            
            let quantoFaltaAV2EM = ((7 - ((av3EM * 0.2)+(av1EM * 0.2)))/0.6);
            return alert(`Você precisa tirar ${quantoFaltaAV2EM.toFixed(2)} na prova específica para passar na AV4`);
        }
}

function CalculoQuantoFaltaAVIIEM(){

        let av1EMInput = document.querySelector('#av1-EM');
        let av2EMInput = document.querySelector('#av2-EM');
        let av3EMInput = document.querySelector('#av3-EM');

        let av1EM = Number(av1EMInput.value); //interdisciplinar
        let av2EM = Number(av2EMInput.value); // trimestral
        let av3EM = Number(av3EMInput.value); //simulado personalizado

        if(av1EM == 0 && av2EM == 0){

            let quantoFaltaAV1EM = (((7-(0.2*av3EM))*0.25)/0.2);
            let quantoFaltaAV2EM = (((7-(0.2*av3EM))*0.75)/0.6);

            return alert(`Você precisa tirar ${quantoFaltaAV1EM.toFixed(2)} na multipla escolha e ${quantoFaltaAV2EM.toFixed(2)} na prova específica para passar na AV4`);
        }else if(av2EM  > 0){
            let quantoFaltaAV1EM = (((7-((0.2*av3EM) + (0.6*av2EM))))/0.2);

            return alert(`Você precisa tirar ${quantoFaltaAV1EM.toFixed(2)} na multipla escolha para passar na AV4`);
        }
        else if(av1EM > 0){
            
            let quantoFaltaAV2EM = ((7 - ((av3EM * 0.2)+(av1EM * 0.2)))/0.6);
            return alert(`Você precisa tirar ${quantoFaltaAV2EM.toFixed(2)} na prova específica para passar na AV4`);
        }
}

function CalculoQuantoFaltaAVIIIEM(){

    let av1EMInput = document.querySelector('#av1-EM');
    let av2EMInput = document.querySelector('#av2-EM');
    let av3EMInput = document.querySelector('#av3-EM');
    
    let av1EM = Number(av1EMInput.value);
    let av2EM = Number(av2EMInput.value);
    let av3EM = Number(av3EMInput.value);

    if(av1EM > 0 && av3EM > 0 && av2EM == 0){
        let quantoFaltaAV2EM = ((7 - ((av3EM * 0.2)+(av1EM * 0.2)))/0.6);
        return alert(`Você precisa tirar ${quantoFaltaAV2EM.toFixed(2)} na trimestral para passar na AV4`);
    }

    else if(av1EM == 0 && av2EM == 0){

        let quantoFaltaAV1EAV2EM = (((7-(0.2*av3EM)))/0.8);

        return alert(`Você precisa tirar ${quantoFaltaAV1EAV2EM.toFixed(2)} na multipla escolha e ${quantoFaltaAV1EAV2EM.toFixed(2)} no simulado personalizado para passar na AV4`);
    }else if(av1EM > 0 && av3EM == 0){

        let quantoFaltaAV3EM = ((7 - ((av1EM * 0.2)+(av2EM * 0.6)))/0.2);
        return alert(`Você precisa tirar ${quantoFaltaAV3EM.toFixed(2)} no simulado personalizado para passar na AV4`);

    }else if(av3EM > 0 && av1EM == 0){

        let quantoFaltaAV1EM = ((7 - ((av3EM * 0.2)+(av2EM * 0.6)))/0.2);
        return alert(`Você precisa tirar ${quantoFaltaAV1EM.toFixed(2)} na multipla escolha para passar na AV4`);
    }
}