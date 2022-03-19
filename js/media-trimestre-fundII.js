function mediaTrimestreGrupoIFUND(){
  let newSec = document.querySelector('.novasec');

  let mediaProvasFUNDInput = document.querySelector('#av5-FUND');
  let geekieTesteFUNDInput = document.querySelector('#av6-FUND');
  let entregaEngajamentoFUNDInput = document.querySelector('#av7-FUND');

  let mediaProvasFUND = Number(mediaProvasFUNDInput.value);
  let geekieTesteFUND = Number(geekieTesteFUNDInput.value);
  let entregaEngajamentoFUND = Number(entregaEngajamentoFUNDInput.value);

  let mediaTrimetreFUND = mediaProvasFUND * 0.7+geekieTesteFUND*0.15+entregaEngajamentoFUND*0.15
  if(verficarValoresFund(mediaProvasFUND,geekieTesteFUND,entregaEngajamentoFUND)){
    verificarMediaFund(mediaTrimetreFUND);
    newSec.style.display = 'block';
    newSec.textContent = `Sua média do trimestre é ${mediaTrimetreFUND.toFixed(2)}`;
  }
}

function mediaTrimestreGrupoIIFUND(){
  let newSec = document.querySelector('.novasec');

  let mediaProvasFUNDInput = document.querySelector('#av5-FUND');
  let entregaEngajamentoFUNDInput = document.querySelector('#av7-FUND');

  let mediaProvasFUND = Number(mediaProvasFUNDInput.value);
  let entregaEngajamentoFUND = Number(entregaEngajamentoFUNDInput.value);

  let mediaTrimetreFUND = mediaProvasFUND * 0.85+entregaEngajamentoFUND*0.15
  if(verficarValoresFund(mediaProvasFUND,entregaEngajamentoFUND)){
    verificarMediaFund(mediaTrimetreFUND);
    newSec.style.display = 'block';
    newSec.textContent = `Sua média do trimestre é ${mediaTrimetreFUND.toFixed(2)}`;
  }
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
  if(av5FUND,av6funav5FUND,av7funav5FUND > 10 || av5FUND,av6funav5FUND,av7funav5FUND < 0){
    alert('Valor Inválido')
  }else{
    return true
  }
}
