function calcularMediaProvaGrupoIFUNDI(){

    var somativaInput = document.querySelector('#somativa');
    var formativaInput = document.querySelector('#formativa');
    var integradaInput = document.querySelector('#integrada');
    var diversificadaInput = document.querySelector('#diversificada');

    var somativa = Number(somativaInput.value);
    var formativa = Number(formativaInput.value);
    var integrada = Number(integradaInput.value);
    var diversificada = Number(diversificadaInput.value);

    if(verificandoValorValido(somativa,formativa,integrada,diversificada)){
        let mediaProvasFundI = (somativa * 0.4) + (formativa *0.3) + (integrada*0.2) + (diversificada*0.1);
        verficandoSePassouFUND(mediaProvasFundI)
    }
}

function calcularMediaProvaGrupoIIFUNDI(){
    
    var atividadePraticaInput = document.querySelector('#atividadePratica');
    var atividadeTeoricaInput = document.querySelector('#atividadeTeorica');
    var participaçãoEngajamentoInput = document.querySelector('#participaçãoEngajamento');

    var atividadePratica = Number(atividadePraticaInput.value);
    var atividadeTeorica = Number(atividadeTeoricaInput.value);
    var participaçãoEngajamento = Number(participaçãoEngajamentoInput.value);

    if(verificandoValorValido(atividadePratica,atividadeTeorica,participaçãoEngajamento)){
        let mediaProvasFundI = (atividadePratica * 0.4) + (atividadeTeorica * 0.4) + (participaçãoEngajamento * 0.2);
        verficandoSePassouFUND(mediaProvasFundI);   
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