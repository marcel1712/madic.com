function CalculoQuantoFaltaFUNDAV2(){

    let interdisciplinarFUND = Number(interdisciplinarFUNDInput.value);

    let quantoFaltaFUND = (6 - (interdisciplinarFUND * 0.4))/0.6;

    if(interdisciplinarFUND > 10 || interdisciplinarFUND < 0 || interdisciplinarFUND === null){
        return alert('Valor invalido');
    }else{
        return alert(`Você precisa tirar ${quantoFaltaFUND} na trimestral para passar`);
    }
}

function CalculoQuantoFaltaFUNDAV1(){
    
    let trimestralFUND = Number(trimestralFUNDInput.value);
    
    let quantoFaltaFUND = (6 - (trimestralFUND * 0.6))/0.4;

    if(quantoFaltaFUND > 10 || quantoFaltaFUND < 0){
        return alert('Valor invalido');
    }else{
        return alert(`Você precisa tirar ${quantoFaltaFUND} na interdisciplinar para passar`);
    }
}