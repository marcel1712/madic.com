function CalculoQuantoFaltaGrupoIFUNDII(){

    let av1FUNDIIInput = document.querySelector('#av1-FUNDII');
    let av2FUNDIIInput = document.querySelector('#av2-FUNDII');

    let av1FUNDII = Number(av1FUNDIIInput.value);
    let av2FUNDII = Number(av2FUNDIIInput.value);

    if(av1FUNDII == 0){
    
        let quantoFaltaAV1FUNDII = ((6-(av2FUNDII*0.6))/0.4);
        return alert(`Você precisa tirar ${quantoFaltaAV1FUNDII.toFixed(2)} na avaliação parciais para passar na AV4`);
    
    }else if(av2FUNDII == 0){

      let quantoFaltaAV2FUNDII = ((6-(av1FUNDII*0.4))/0.6);
      return alert(`Você precisa tirar ${quantoFaltaAV2FUNDII.toFixed(2)} na avaliação trimestral para passar na AV4`)
    }

}
