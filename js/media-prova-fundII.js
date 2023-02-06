function calcularMediaProvaGrupoIFUND(){

    let av1FUNDIIInput = document.querySelector('#av1-FUNDII');
    let av2FUNDIIInput = document.querySelector('#av2-FUNDII');

    let av1FUNDII = Number(av1FUNDIIInput.value);
    let av2FUNDII = Number(av2FUNDIIInput.value);

    if(verificandoValorValido(av1FUNDII,av2FUNDII)){
        let mediaProvasFUNDII = (av1FUNDII * 0.4) + (av2FUNDII * 0.6);
        verficandoSePassouFUND(mediaProvasFUNDII);
    }
}

function calcularMediaProvaGrupoIIFUND(){

    let av1FUNDIIInput = document.querySelector('#av1-FUNDII');
    let av2FUNDIIInput = document.querySelector('#av2-FUNDII');

    let av1FUNDII = Number(av1FUNDIIInput.value);
    let av2FUNDII = Number(av2FUNDIIInput.value);

    if(verificandoValorValido(av1FUNDII,av2FUNDII)){
        let mediaProvasFUNDII = ((av1FUNDII * 0.4) + (av2FUNDII * 0.6))
        verficandoSePassouFUND(mediaProvasFUNDII);
    }
}

function calcularMediaProvaGrupoIIIFUND(){

    let av1FUNDIIInput = document.querySelector('#av1-FUNDII');
    let av2FUNDIIInput = document.querySelector('#av2-FUNDII');
    let av3FUNDIIInput = document.querySelector('#av3-FUNDII');

    let av1FUNDII = Number(av1FUNDIIInput.value);
    let av2FUNDII = Number(av2FUNDIIInput.value);
    let av3FUNDII = Number(av3FUNDIIInput.value);

    if(verificandoValorValido(av1FUNDII,av2FUNDII,av3FUNDII)){
        let mediaProvasFUNDII = ((av1FUNDII*0.2)+(av2FUNDII*0.5)+(av3FUNDII*0.3))
        verficandoSePassouFUND(mediaProvasFUNDII);
    }
}

function calcularMediaProvaGrupoIVFUND(){

    let av1FUNDIIInput = document.querySelector('#av1-FUNDII');
    let av2FUNDIIInput = document.querySelector('#av2-FUNDII');

    let av1FUNDII = Number(av1FUNDIIInput.value);
    let av2FUNDII = Number(av2FUNDIIInput.value);

    if(verificandoValorValido(av1FUNDII,av2FUNDII)){
        let mediaProvasFUNDII = ((av1FUNDII*0.6)+(av2FUNDII*0.4));
        verficandoSePassouFUND(mediaProvasFUNDII);
    }
}

function verficandoSePassouFUND(media){
    let navProvasFUND = document.querySelector('#mediaProvasFUND');
    let backgroundMain = document.querySelector('main');
    let backgroundHTML = document.querySelector('html');
    if(media.toFixed(2) < 6){
        backgroundMain.style.background = '#F25757';
        backgroundHTML.style.background = '#F25757';
        navProvasFUND.innerHTML = `Sua média é ${media.toFixed(2)}`;
    }else{
        backgroundMain.style.background = '#3EFFAC';
        backgroundHTML.style.background = '#3EFFAC';
        navProvasFUND.innerHTML = `Sua média é ${media.toFixed(2)}`;
    }
}

function verificandoValorValido(valor1,valor2,valor3,valor4){
    if(valor1,valor2,valor3,valor4 > 10 || valor1,valor2,valor3,valor4 < 0){
        alert('Valor Inválido');
    }else{
        return true;
    }
}