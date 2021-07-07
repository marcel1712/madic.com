function CalculoQuantoFaltaFUND(){

    let interdisciplinarFUND = Number(interdisciplinarFUNDInput.value);

    let quantoFaltaFUND = (6 - (interdisciplinarFUND * 0.4))/0.6;

    if(interdisciplinarFUND > 10 || interdisciplinarFUND < 0 || interdisciplinarFUND === null){
        return alert('Valor invalido');
    }else{
        return alert(`Você precisa tirar ${quantoFaltaFUND} na trimestral para passar`);
    }
}