function mediaTrimestreGrupoIFUNDII(){
  let newsec = document.querySelector('.novasec');

  let av5FUNDIIInput = document.querySelector('#av5-FUNDII');
  let av6FUNDIIInput = document.querySelector('#av6-FUNDII');
  let av7FUNDIIInput = document.querySelector('#av7-FUNDII');
  let av8FUNDIIInput = document.querySelector('#av8-FUNDII');

  let av5FUNDII = Number(av5FUNDIIInput.value);
  let av6FUNDII = Number(av6FUNDIIInput.value);
  let av7FUNDII = Number(av7FUNDIIInput.value);
  let av8FUNDII = Number(av8FUNDIIInput.value);

  let mediaTrimetreFUNDII = ((av5FUNDII * 0.7)+(av6FUNDII*0.1)+(av7FUNDII*0.1)+(av8FUNDII*0.1))
  if(verficarValoresFund(av5FUNDII,av6FUNDII,av7FUNDII,av8FUNDII)){
    verificarMediaFund(mediaTrimetreFUNDII);
    newsec.style.display = 'block';
    newsec.textContent = `Sua média do trimestre é ${mediaTrimetreFUNDII.toFixed(2)}`;
    newsec.scrollIntoView({behavior: "smooth"});
  }
}

function mediaTrimestreGrupoIIFUND(){
  let newsec = document.querySelector('.novasec');

  let av5FUNDIIInput = document.querySelector('#av5-FUNDII');
  let av6FUNDIIInput = document.querySelector('#av6-FUNDII');
  let av7FUNDIIInput = document.querySelector('#av7-FUNDII');

  let av5FUNDII = Number(av5FUNDIIInput.value);
  let av6FUNDII = Number(av6FUNDIIInput.value);
  let av7FUNDII = Number(av7FUNDIIInput.value);

  let mediaTrimetreFUNDII = ((av5FUNDII * 0.7)+(av6FUNDII*0.2)+(av7FUNDII*0.1))
  if(verficarValoresFund(av5FUNDII,av6FUNDII,av7FUNDII)){
    verificarMediaFund(mediaTrimetreFUNDII);
    newsec.style.display = 'block';
    newsec.textContent = `Sua média do trimestre é ${mediaTrimetreFUND.toFixed(2)}`;
  }
}
 
function verificarMediaFund(mediaFUND){
  
    let backgroundMain = document.querySelector('main');
    let backgroundHTML = document.querySelector('html');
 
    if(mediaFUND.toFixed(2) >= 6){
        backgroundMain.style.background = '#3EFFAC';
        backgroundHTML.style.background = '#3EFFAC';
    }else{
        backgroundMain.style.background = '#F25757';
        backgroundHTML.style.background = '#F25757';
    }
}
 
 
function verficarValoresFund(av5FUND,av6FUND,av7FUND,av8FUND){
  if(av5FUND,av6FUND,av6FUND,av8FUND > 10 || av5FUND,av6FUND,av7FUND,av8FUND < 0){
    alert('Valor Inválido')
  }else{
    return true
  }
}
