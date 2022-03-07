function calcularMediaProvaGrupoIFUND(){

    let interdisciplinarFUNDInput = document.querySelector('#interdisciplinar-FUND');
    let PorAreaFUNDInput = document.querySelector('#PorArea-FUND')
    let trimestralFUNDInput = document.querySelector('#trimestral-FUND');

    let interdisciplinarFUND = Number(interdisciplinarFUNDInput.value);
    let PorAreaFUND = Number(PorAreaFUNDInput.value);
    let trimestralFUND = Number(trimestralFUNDInput.value);

    if(verificandoValorValido(interdisciplinarFUND,PorAreaFUND,trimestralFUND)){
        let mediaProvasFUND = interdisciplinarFUND * 0.3 + PorAreaFUND * 0.3 + trimestralFUND * 0.4;
        verficandoSePassouFUND(mediaProvasFUND);
    }
}

function calcularMediaProvaGrupoIIFUND(){

    let interdisciplinarFUNDInput = document.querySelector('#interdisciplinar-FUND');
    let simuladoProficienciaFUNDInput = document.querySelector('#simuladoProficiencia-FUND');
    let trimestralFUNDInput = document.querySelector('#trimestral-FUND');

    let interdisciplinarFUND = Number(interdisciplinarFUNDInput.value);
    let simuladoProficienciaFUND = Number(simuladoProficienciaFUNDInput.value);
    let trimestralFUND = Number(trimestralFUNDInput.value);

    if(verificandoValorValido(interdisciplinarFUND,simuladoProficienciaFUND,trimestralFUND)){
        let mediaProvasFUND = interdisciplinarFUND * 0.3 + simuladoProficienciaFUND * 0.2 + trimestralFUND * 0.5;
        verficandoSePassouFUND(mediaProvasFUND)
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

    if(verificandoValorValido(interdisciplinarFUND,avaliaçãoProcessualFUND,autoavaliaçãoFUND,atividadeavaliativasFUND)){
        let mediaProvasFUND = interdisciplinarFUND * 0.2 + avaliaçãoProcessualFUND * 0.5 + autoavaliaçãoFUND * 0.1 + atividadeavaliativasFUND*0.2;
        verficandoSePassouFUND(mediaProvasFUND);
    }
}

function calcularMediaProvaGrupoIVFUND(){
    let participaçãoEngajamentoFUNDInput = document.querySelector('#participaçãoEngajamento-FUND');
    let apresentaçãoFUNDInput = document.querySelector('#presentação-FUND');

    let participaçãoEngajamento = Number(participaçãoEngajamentoFUNDInput.value);
    let apresentaçãoFUND = Number(participaçãoEngajamentoFUNDInput.value);

    if(verificandoValorValido(participaçãoEngajamento,apresentaçãoFUND)){
        let mediaProvasFUND = participaçãoEngajamento*0.6+apresentaçãoFUND*0.4;
        verficandoSePassouFUND(mediaProvasFUND);
    }
}

function verficandoSePassouFUND(media){
    let navProvasFUND = document.querySelector('#mediaProvasFUND');
    let backgroundMain = document.querySelector('main');
    let backgroundHTML = document.querySelector('html');
    if(media < 6.0){
        backgroundMain.style.background = '#F25757';
        backgroundHTML.style.background = '#F25757';
        navProvasFUND.innerHTML = `Sua média é ${media.toFixed(2)}`;
    }else{
        backgroundMain.style.background = '#3EFFAC';
        backgroundHTML.style.background = '#3EFFAC';
        navProvasFUND.innerHTML = `Sua média é ${media.toFixed(2)}`
    }
}

function verificandoValorValido(valor1,valor2,valor3,valor4){
    if(valor1,valor2,valor3,valor4 > 10 || valor1,valor2,valor3,valor4 < 0){
        alert('Valor Inválido');
    }else{
        return true;
    }
}