function mediaTrimestreFUND(){
 
    let av5FUNDInput = document.querySelector('#av5-FUND');
    let av6FUNDInput = document.querySelector('#av6-FUND');
    let av7FUNDInput = document.querySelector('#av7-FUND');
 
    av5FUND = Number(av5FUNDInput.value);
    av6FUND = Number(av6FUNDInput.value);
    av7FUND = Number(av7FUNDInput.value);
 
    if(verficarValoresFund(av5FUND,av6FUND,av7FUND)){
      if(selecionarMateriaFund()){
 
        calculoMediaGrupo1Fund(av5FUND,av6FUND,av7FUND)
        console.log(materiasFund)
      }else{
        calculoMediaGrupo2Fund(av5FUND,av6FUND,av7FUND)
        console.log(materiasFund)
    }
  }
}
 
function selecionarMateriaFund(){

  let materiasFundInput = document.querySelector('#materias-fund');
  materiasFund = materiasFundInput.value;

  let materias1Fund = ['RIPT','Gramática','Matemática I','Matemática II','História','Geografia','Ciências','Química/Física','Inglês','Espanhol','Japonês'];
  let materias2Fund = ['Arte','Empreendedorismo Maker','Informática','Robótica','Música','Projeto de Vida e Inteligência Emocional','Educação Física','Oratória','Núcleos Formativos Eletivos'];

  if(materias1Fund.indexOf(materiasFund) > -1){
    return true;
  }else{
    return false;
  }
}
 
function calculoMediaGrupo1Fund(av5FUND,av6FUND,av7FUND){
 
  let mediaFUND = ((av5FUND * 75/100)+(av6FUND*10/100)+(av7FUND*15/100));
 
  verificarMediaFund(mediaFUND)
 
  let newsec = document.querySelector('.novasec');
  newsec.style.display = 'block';
  newsec.textContent = `Sua média do trimestre é ${mediaFUND.toFixed(2)}`;
}
 
function calculoMediaGrupo2Fund(av5FUND,av6FUND,av7FUND){
  let mediaFUND = ((av5FUND * 60/100)+(av6FUND*30/100)+(av7FUND*10/100));
 
  verificarMediaFund(mediaFUND)
 
  let newsec = document.querySelector('.novasec');
  newsec.style.display = 'block';
  newsec.textContent = `Sua média do trimestre é ${mediaFUND.toFixed(2)}`;
 
}
 
function verificarMediaFund(mediaFUND){
  
    let backgroundMain = document.querySelector('main');
    let backgroundHTML = document.querySelector('html');
 
    if(mediaFUND >= 6){
        backgroundMain.style.background = '#3EFFAC';
        backgroundHTML.style.background = '#3EFFAC';
    }else{
        backgroundMain.style.background = '#F25757';
        backgroundHTML.style.background = '#F25757';
    }
}
 
 
function verficarValoresFund(av5FUND,av6funav5FUND,av7funav5FUND){
  if(av5FUND > 10 || av6funav5FUND > 10 || av7funav5FUND > 10){
    alert('Valor de uma das notas maior do que 10')
  }else if(av5FUND < 0 || av6funav5FUND < 0 || av7funav5FUND < 0){
    alert('Valor de uma das notas menor do que 0')
  }else{
    return true;
  }
}
