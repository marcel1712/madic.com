function mediaTrimestreEM(){
  
  let materiasEmInput = document.querySelector('#materias-em');
  let materiasEm = materiasEmInput.value;

  let av5EMInput = document.querySelector('#av5-EM');
  let av6EMInput = document.querySelector('#av6-EM');
  let av7EMInput = document.querySelector('#av7-EM');

  let av5EM = Number(av5EMInput.value);
  let av6EM = Number(av6EMInput.value);
  let av7EM = Number(av7EMInput.value);

  if(verficarValoresEm(av5EM,av6EM,av7EM)){
    if(selecionarMateriaEm(materiasEm)){
      
      calculoMediaGrupo1Em(av5EM,av6EM,av7EM)
    }else{
      calculoMediaGrupo2Em(av5EM,av6EM,av7EM)
    }
  }
}

//verficação da matéria
function selecionarMateriaEm(materiasEm){
  let materias1Em = ['Gramática','Literatura','Redação','Álgebra','Geometria','História','Geografia','Biologia','Química','Física','Inglês','Sociologia','Filosofia'];

  let materias2Em = ['Arte','Educação Física','Projeto de Vida','Trilhas'];

  if(materias1Em.indexOf(materiasEm) > -1){
    return true;
  }else{
    return false;
  }
}

//calculo da média grupo1
function calculoMediaGrupo1Em(av5EM,av6EM,av7EM){

  let mediaEm = ((av5EM * 70/100)+(av6EM * 15/100)+(av7EM * 15/100));

  verificarMediaEm(mediaEm);
  
  let newsec = document.querySelector('.novasec');
  newsec.style.display = 'block';
  newsec.textContent = `Sua média do trimestre é ${mediaEm.toFixed(2)}`;
}

//calculo da média grupo2
function calculoMediaGrupo2Em(av5EM,av6EM,av7EM){
  let mediaEm = ((av5EM * 60/100)+(av6EM * 30/100)+(av7EM * 10/100));

  verificarMediaEm(mediaEm);
  
  let newsec = document.querySelector('.novasec');
  newsec.style.display = 'block';
  newsec.textContent = `Sua média do trimestre é ${mediaEm.toFixed(2)}`;
}

//verifica se a nota esta acima ou abaixo da media
function verificarMediaEm(mediaEm){

  let backgroundMain = document.querySelector('main');
  let backgroundHTML = document.querySelector('html');

  if(mediaEm >= 7){
    backgroundMain.style.background = '#3EFFAC';
    backgroundHTML.style.background = '#3EFFAC';
  }else{
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