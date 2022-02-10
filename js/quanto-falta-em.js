function CalculoQuantoFaltaEM(){

    let interdisciplinarEM = Number(interdisciplinarEMInput.value);

    let quantoFaltaEM = (7 - (interdisciplinarEM * 0.4))/0.6;

    if(interdisciplinarEM > 10 || interdisciplinarEM < 0){
        return alert('Valor invalido');
    }else{
        return alert(`Você precisa tirar ${quantoFaltaEM} na trimestral para passar`);
    }
}