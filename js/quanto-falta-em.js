function CalculoQuantoFaltaEMAV2(){

    let interdisciplinarEM = Number(interdisciplinarEMInput.value);

    let quantoFaltaEM = (7 - (interdisciplinarEM * 0.4))/0.6;

    if(interdisciplinarEM > 10 || interdisciplinarEM < 0){
        return alert('Valor invalido');
    }else{
        return alert(`Você precisa tirar ${quantoFaltaEM} na trimestral para passar`);
    }
}

function CalculoQuantoFaltaAV1EM(){

    let trimestralEM = Number(trimestralEMInput.value);

    let quantoFaltaEM = (7 - (trimestralEM * 0.6))/0.4;

    if(trimestralEM > 10 || trimestralEM < 0){
        return alert('Valor invalido');
    }else{
        return alert(`Você precisa tirar ${quantoFaltaEM} na interdisciplinar para passar`);
    }
}