function calcularMediaProvaGrupoIEM(){

    let av1EMInput = document.querySelector('#av1-EM');
    let av2EMInput = document.querySelector('#av2-EM');
    let av3EMInput = document.querySelector('#av3-EM');

    let av1EM = Number(av1EMInput.value);
    let av2EM = Number(av2EMInput.value);
    let av3EM = Number(av3EMInput.value);

    let navProvasEM = document.querySelector('#media-provas-EM');

    if(av1EM > 10 || av1EM < 0){
        alert('Valor da sua prova de multipla escolha está inválido');
    }else if(av2EM > 10 || av2EM < 0){
        alert('Valor da sua específica dissertativa está inválido')
    }else{
        let mediaProvasEm = (((av1EM * 0.2) + (av2EM * 0.6)) + (av3EM * 0.2));

        let backgroundMain = document.querySelector('main');
        let backgroundHTML = document.querySelector('html');

        if(mediaProvasEm < 7.00){
            backgroundMain.style.background = '#F25757';
            backgroundHTML.style.background = '#F25757';
            navProvasEM.innerHTML = `Sua média é ${mediaProvasEm.toFixed(2)}`;
        }else if(mediaProvasEm >= 7.00){
            backgroundMain.style.background = '#3EFFAC';
            backgroundHTML.style.background = '#3EFFAC';
            navProvasEM.innerHTML = `Sua média é ${mediaProvasEm.toFixed(2)}`;
        }
    }
}

function calcularMediaProvaGrupoIIEM(){

    let av1EMInput = document.querySelector('#av1-EM');
    let av2EMInput = document.querySelector('#av2-EM');
    let av3EMInput = document.querySelector('#av3-EM');

    let av1EM = Number(av1EMInput.value);
    let av2EM = Number(av2EMInput.value);
    let av3EM = Number(av3EMInput.value);

    let navProvasEM = document.querySelector('#media-provas-EM');

    if(av1EM > 10 || av1EM < 0){
        alert('Valor da sua prova de multipla escolha está inválido');
    }else if(av2EM > 10 || av2EM < 0){
        alert('Valor da sua específica dissertativa está inválido')
    }else{
        let mediaProvasEm = (((av1EM * 0.3) + (av2EM * 0.35)) + (av3EM * 0.35));

        let backgroundMain = document.querySelector('main');
        let backgroundHTML = document.querySelector('html');

        if(mediaProvasEm < 7.00){
            backgroundMain.style.background = '#F25757';
            backgroundHTML.style.background = '#F25757';
            navProvasEM.innerHTML = `Sua média é ${mediaProvasEm.toFixed(2)}`;
        }else if(mediaProvasEm >= 7.00){
            backgroundMain.style.background = '#3EFFAC';
            backgroundHTML.style.background = '#3EFFAC';
            navProvasEM.innerHTML = `Sua média é ${mediaProvasEm.toFixed(2)}`;
        }
    }
}

function calcularMediaProvaGrupoIIIEM(){

    let av1EMInput = document.querySelector('#av1-EM');
    let av2EMInput = document.querySelector('#av2-EM');
    let av3EMInput = document.querySelector('#av3-EM');

    let av1EM = Number(av1EMInput.value);
    let av2EM = Number(av2EMInput.value);
    let av3EM = Number(av3EMInput.value);

    let navProvasEM = document.querySelector('#media-provas-EM');

    if(av1EM > 10 || av1EM < 0){
        alert('Valor da sua prova de multipla escolha está inválido');
    }else if(av2EM > 10 || av2EM < 0){
        alert('Valor da sua específica dissertativa está inválido')
    }else{
        let mediaProvasEm = (((av1EM * 0.6) + (av2EM * 0.3)) + (av3EM * 0.1));

        let backgroundMain = document.querySelector('main');
        let backgroundHTML = document.querySelector('html');

        if(mediaProvasEm < 6.00){
            backgroundMain.style.background = '#F25757';
            backgroundHTML.style.background = '#F25757';
            navProvasEM.innerHTML = `Sua média é ${mediaProvasEm.toFixed(2)}`;
        }else if(mediaProvasEm >= 6.00){
            backgroundMain.style.background = '#3EFFAC';
            backgroundHTML.style.background = '#3EFFAC';
            navProvasEM.innerHTML = `Sua média é ${mediaProvasEm.toFixed(2)}`;
        }
    }
}

function calcularMediaProvaGrupoIVEM(){

    let av1EMInput = document.querySelector('#av1-EM');
    let av2EMInput = document.querySelector('#av2-EM');

    let av1EM = Number(av1EMInput.value);
    let av2EM = Number(av2EMInput.value);

    let navProvasEM = document.querySelector('#media-provas-EM');

    if(av1EM > 10 || av1EM < 0){
        alert('Valor da sua prova de multipla escolha está inválido');
    }else if(av2EM > 10 || av2EM < 0){
        alert('Valor da sua específica dissertativa está inválido')
    }else{
        let mediaProvasEm = (((av1EM * 0.6) + (av2EM * 0.4)));

        let backgroundMain = document.querySelector('main');
        let backgroundHTML = document.querySelector('html');

        if(mediaProvasEm < 6.00){
            backgroundMain.style.background = '#F25757';
            backgroundHTML.style.background = '#F25757';
            navProvasEM.innerHTML = `Sua média é ${mediaProvasEm.toFixed(2)}`;
        }else if(mediaProvasEm >= 6.00){
            backgroundMain.style.background = '#3EFFAC';
            backgroundHTML.style.background = '#3EFFAC';
            navProvasEM.innerHTML = `Sua média é ${mediaProvasEm.toFixed(2)}`;
        }
    }
}