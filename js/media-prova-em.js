let interdisciplinarEMInput = document.querySelector('#interdisciplinar-EM');
let trimestralEMInput = document.querySelector('#trimestral-EM');

function calcularMediaProvaEM(){

    let interdisciplinarEM = Number(interdisciplinarEMInput.value);
    let trimestralEM = Number(trimestralEMInput.value);

    let navProvasEM = document.querySelector('#media-provas-EM');

    if(interdisciplinarEM > 10 || interdisciplinarEM < 0){
        alert('Valor da sua Interdisciplinar esta inválido');
    }else if(trimestralEM > 10 || interdisciplinarEM < 0){
        alert('Valor da sua Trimestral esta inválido')
    }else{
        let mediaProvasEm = interdisciplinarEM * 0.4 + trimestralEM * 0.6;
        let backgroundMain = document.querySelector('main');
        let backgroundHTML = document.querySelector('html');

        if(mediaProvasEm < 7.0){
            backgroundMain.style.background = '#F25757';
            backgroundHTML.style.background = '#F25757';
            navProvasEM.innerHTML = `Sua média é ${mediaProvasEm.toFixed(2)}`;
        }else{
            backgroundMain.style.background = '#3EFFAC';
            backgroundHTML.style.background = '#3EFFAC';
            navProvasEM.innerHTML = `Sua média é ${mediaProvasEm.toFixed(2)}`
        }
    }
}