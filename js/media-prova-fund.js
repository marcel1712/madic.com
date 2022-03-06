function calcularMediaProvaGrupoIFUND(){

    let interdisciplinarFUNDInput = document.querySelector('#interdisciplinar-FUND');
    let PorAreaFUNDInput = document.querySelector('#PorArea-FUND')
    let trimestralFUNDInput = document.querySelector('#trimestral-FUND');

    let interdisciplinarFUND = Number(interdisciplinarFUNDInput.value);
    let PorAreaFUND = Number(PorAreaFUNDInput.value);
    let trimestralFUND = Number(trimestralFUNDInput.value);

    let navProvasFUND = document.querySelector('#mediaProvasFUND');

    if(interdisciplinarFUND > 10 || interdisciplinarFUND < 0){
        alert('Valor da sua Interdisciplinar esta inválido');
    }else if(trimestralFUND > 10 || interdisciplinarFUND < 0){
        alert('Valor da sua Trimestral esta inválido')
    }else{
        let mediaProvasFUND = interdisciplinarFUND * 0.3 + PorAreaFUND * 0.3 + trimestralFUND * 0.4;
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

function calcularMediaProvaGrupoIIFUND(){

    let interdisciplinarFUNDInput = document.querySelector('#interdisciplinar-FUND');
    let simuladoProficienciaFUNDInput = document.querySelector('#simuladoProficiencia-FUND');
    let trimestralFUNDInput = document.querySelector('#trimestral-FUND');

    let interdisciplinarFUND = Number(interdisciplinarFUNDInput.value);
    let simuladoProficienciaFUND = Number(simuladoProficienciaFUNDInput.value);
    let trimestralFUND = Number(trimestralFUNDInput.value);

    let navProvasFUND = document.querySelector('#mediaProvasFUND');

    if(interdisciplinarFUND > 10 || interdisciplinarFUND < 0){
        alert('Valor da sua Interdisciplinar esta inválido');
    }else if(trimestralFUND > 10 || interdisciplinarFUND < 0){
        alert('Valor da sua Trimestral esta inválido')
    }else{
        let mediaProvasFUND = interdisciplinarFUND * 0.3 + simuladoProficienciaFUND * 0.2 + trimestralFUND * 0.5;
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

function calcularMediaProvaGrupoIIIFUND(){

    let interdisciplinarFUNDInput = document.querySelector('#interdisciplinar-FUND');
    let avaliaçãoProcessualFUNDInput = document.querySelector('#simuladoProficiencia-FUND');
    let autoavaliaçãoFUNDInput = document.querySelector('#autoavaliação-FUND')
    let atividadeavaliativasFUNDInput = document.querySelector('#atividadeavaliativas-FUND');

    let interdisciplinarFUND = Number(interdisciplinarFUNDInput.value);
    let avaliaçãoProcessualFUND = Number(avaliaçãoProcessualFUNDInput.value);
    let autoavaliaçãoFUND = Number(autoavaliaçãoFUNDInput.value);
    let atividadeavaliativasFUND = Number(atividadeavaliativasFUNDInput.value);


    let navProvasFUND = document.querySelector('#mediaProvasFUND');

    if(interdisciplinarFUND > 10 || interdisciplinarFUND < 0){
        alert('Valor da sua Interdisciplinar esta inválido');
     }else{
        let mediaProvasFUND = interdisciplinarFUND * 0.2 + avaliaçãoProcessualFUND * 0.5 + autoavaliaçãoFUND * 0.1 + atividadeavaliativasFUND*0.2;
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