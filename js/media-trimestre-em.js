function mediaTrimestreEM(){

  let av5EMInput = document.querySelector('#av5-EM');
  let av6EMInput = document.querySelector('#av6-EM');
  let av7EMInput = document.querySelector('#av7-EM');

  let av5EM = Number(av5EMInput.value);
  let av6EM = Number(av6EMInput.value);
  let av7EM = Number(av7EMInput.value);

  if(verficarValoresEm(av5EM,av6EM,av7EM)){
    calculoMediaGrupo1Em(av5EM,av6EM,av7EM)
  }
}

//calculo da média grupo1
function calculoMediaGrupo1Em(av5EM,av6EM,av7EM){

  let mediaEm = ((av5EM.toFixed(2) * 0.7)+(av6EM.toFixed(2) * 0.15)+(av7EM.toFixed(2) * 0.15));

  verificarMediaEm(mediaEm);
  
  let newsec = document.querySelector('.novasec');
  newsec.style.display = 'block';
  newsec.textContent = `Sua média do trimestre é ${mediaEm.toFixed(2)}`;
  newsec.scrollIntoView({behavior: "smooth"});
}

//nao esta sendo mais utilizado
//calculo da média grupo2
function calculoMediaGrupo2Em(av5EM,av6EM,av7EM){
  let mediaEm = ((av5EM * 0.6)+(av6EM * 0.3)+(av7EM * 0.1));

  verificarMediaEm(mediaEm);
  
  let newsec = document.querySelector('.novasec');
  newsec.style.display = 'block';
  newsec.textContent = `Sua média do trimestre é ${mediaEm.toFixed(2)}`;
}

//verifica se a nota esta acima ou abaixo da media
function verificarMediaEm(mediaEm){

  let backgroundMain = document.querySelector('main');
  let backgroundHTML = document.querySelector('html');

  if(mediaEm.toFixed(2) >= 6){
    backgroundMain.style.background = '#3EFFAC';
    backgroundHTML.style.background = '#3EFFAC';
  }else if(mediaEm.toFixed(2) < 6){
    backgroundMain.style.background = '#F25757';
    backgroundHTML.style.background = '#F25757';
  }
}

function verficarValoresEm(av5EM,av6EM,av7EM){
  if(av5EM > 10 || av6EM > 10 || av7EM > 10){
    alert('Valor de uma das notas maior do que 10')
  }else if(av5EM < 0 || av6EM < 0 || av7EM < 0){
    alert('Valor de uma das notas menor do que 0')
  }else{
    return true;
  }
}