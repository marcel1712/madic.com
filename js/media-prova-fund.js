let interdisciplinarFUNDInput = document.querySelector('#interdisciplinar-FUND');
let trimestralFUNDInput = document.querySelector('#trimestral-FUND');

function calcularMediaProvaFUND(){

    let interdisciplinarFUND = Number(interdisciplinarFUNDInput.value);
    let trimestralFUND = Number(trimestralFUNDInput.value);

    let navProvasFUND = document.querySelector('#media-provas-FUND');

    if(interdisciplinarFUND > 10 || interdisciplinarFUND < 0){
        alert('Valor da sua Interdisciplinar esta inválido');
    }else if(trimestralFUND > 10 || interdisciplinarFUND < 0){
        alert('Valor da sua Trimestral esta inválido')
    }else{
        let mediaProvasFUND = interdisciplinarFUND * 0.4 + trimestralFUND * 0.6;
        let backgroundMain = document.querySelector('main');
        let backgroundHTML = document.querySelector('html');

        if(mediaProvasFUND < 6.0){
            backgroundMain.style.background = '#F25757';
            backgroundHTML.style.background = '#F25757';
            navProvasFUND.innerHTML = `Sua média é ${mediaProvasFUND.toFixed(2)}`;
        }else{
            backgroundMain.style.background = '#3EFFAC';
            backgroundHTML.style.background = '#3EFFAC';
            navProvasFUND.innerHTML = `Sua média é ${mediaProvasFUND.toFixed(2)}`
        }
    }
}