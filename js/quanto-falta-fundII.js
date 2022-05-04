function CalculoQuantoFaltaFUNDInterdisciplinar(){

    let interdisciplinarFUNDInput = document.querySelector('#interdisciplinar-FUND');
    let PorAreaFUNDInput = document.querySelector('#PorArea-FUND');
    let trimestralFUNDInput = document.querySelector('#trimestral-FUND');

    let interdisciplinarFUND = Number(interdisciplinarFUNDInput.value);
    let PorAreaFUND = Number(PorAreaFUNDInput.value);
    let trimestralFUND = Number(trimestralFUNDInput.value);

    if(interdisciplinarFUND == 0 && PorAreaFUND > 0 && trimestralFUND > 0){
    
        let quantoFaltaInterdisciplinarFUND = ((6 - ((PorAreaFUND * 0.3)+(trimestralFUND*0.4)))/0.3);
        return alert(`Você precisa tirar ${quantoFaltaInterdisciplinarFUND.toFixed(2)} na interdisciplinar para passar AV4`);
    
    }else if(PorAreaFUND == 0 && trimestralFUND == 0){
        
        let quantoFaltaPorAreaFUND = (((6-(0.3*interdisciplinarFUND))*(3/7))/0.3);
        let quantoFaltaTrimestralFUND = (((6-(0.3*interdisciplinarFUND))*(4/7))/0.4);
        
        return alert(`Você precisa tirar ${quantoFaltaPorAreaFUND.toFixed(2)} na avaliação por área e ${quantoFaltaTrimestralFUND.toFixed(2)} na trimestral para passar na AV4`);
    
    }else if(PorAreaFUND > 0 && trimestralFUND == 0){

        let quantoFaltaTrimestralFUND = (6-((PorAreaFUND*0.3)+(interdisciplinarFUND * 0.3)))/0.4;
        return alert(`Você precisa tirar ${quantoFaltaTrimestralFUND.toFixed(2)} na trimestral para passar na AV4`);
    
    }else if(trimestralFUND > 0 && PorAreaFUND == 0){
        let quantoFaltaPorAreaFUND = (6-((trimestralFUND*0.4)+(interdisciplinarFUND * 0.3)))/0.3;
        return alert (`Você precisa tirar ${quantoFaltaPorAreaFUND.toFixed(2)} na avaliação por área para passar na AV4`);
    }

}
function CalculoQuantoFaltaFUNDPorArea(){
    
  let interdisciplinarFUNDInput = document.querySelector('#interdisciplinar-FUND');
  let PorAreaFUNDInput = document.querySelector('#PorArea-FUND');
  let trimestralFUNDInput = document.querySelector('#trimestral-FUND');

  let interdisciplinarFUND = Number(interdisciplinarFUNDInput.value);
  let PorAreaFUND = Number(PorAreaFUNDInput.value);
  let trimestralFUND = Number(trimestralFUNDInput.value);

  if(PorAreaFUND == 0 && interdisciplinarFUND > 0 && trimestralFUND > 0){
    
    let quantoFaltaPorAreaFUND = ((6 - ((interdisciplinarFUND * 0.3)+(trimestralFUND*0.4)))/0.3);
    return alert(`Você precisa tirar ${quantoFaltaPorAreaFUND.toFixed(2)} na avaliação por área para passar na AV4`);
    
  }else if(interdisciplinarFUND == 0 && trimestralFUND == 0){
    let quantoFaltaInterdisciplinarFUND =  (((6-(0.3*PorAreaFUND))*(3/7))/0.3);
    let quantoFaltaTrimestralFUND = (((6-(0.3*PorAreaFUND))*(4/7))/0.4);

    return alert(`Você precisa tirar ${quantoFaltaInterdisciplinarFUND.toFixed(2)} na interdisciplinar e ${quantoFaltaTrimestralFUND.toFixed(2)} na trimestral para passar na AV4`)
  }else if (interdisciplinarFUND > 0 && trimestralFUND == 0){

    let quantoFaltaTrimestralFUND = (6-((PorAreaFUND*0.3)+(interdisciplinarFUND * 0.3)))/0.4;
    return alert(`Você precisa tirar ${quantoFaltaTrimestralFUND.toFixed(2)} na trimestral para passar na AV4`);
    
  }else if(trimestralFUND > 0 && interdisciplinarFUND == 0){
    let quantoFaltaInterdisciplinarFUND = (6-((trimestralFUND*0.4)+(PorAreaFUND * 0.3)))/0.3;
    return alert (`Você precisa tirar ${quantoFaltaInterdisciplinarFUND.toFixed(2)} na avaliação por área para passar na AV4`);
  }
  
}

function CalculoQuantoFaltaFUNDTrimestral() {

  
  let interdisciplinarFUNDInput = document.querySelector('#interdisciplinar-FUND');
  let PorAreaFUNDInput = document.querySelector('#PorArea-FUND');
  let trimestralFUNDInput = document.querySelector('#trimestral-FUND');

  let interdisciplinarFUND = Number(interdisciplinarFUNDInput.value);
  let PorAreaFUND = Number(PorAreaFUNDInput.value);
  let trimestralFUND = Number(trimestralFUNDInput.value);

  if(trimestralFUND == 0 && interdisciplinarFUND > 0 && PorAreaFUND > 0){
    
    let quantoFaltaTrimestralFUND = ((6 - ((interdisciplinarFUND * 0.3)+(PorAreaFUND*0.3)))/0.4);
    return alert(`Você precisa tirar ${quantoFaltaTrimestralFUND.toFixed(2)} na trimestral para passar na AV4`);
    
  }else if(interdisciplinarFUND == 0 && PorAreaFUND == 0){
    
    let quantoFaltaInterdisciplinarFUND = (((6-(0.4*trimestralFUND))*(1/2))/0.3);
    let quantoFaltaPorAreaFUND = (((6-(0.4*trimestralFUND))*(1/2))/0.3);
    return alert(`Você precisa tirar ${quantoFaltaInterdisciplinarFUND.toFixed(2)} na interdisciplinar e ${quantoFaltaPorAreaFUND.toFixed(2)} na avaliação por área para passar na AV4`);
    
  }else if(interdisciplinarFUND > 0 && PorAreaFUND == 0){

    let quantoFaltaPorAreaFUND = ((6 - ((trimestralFUND * 0.4)+(interdisciplinarFUND*0.3)))/0.3);
    return alert(`Você precisa tirar ${quantoFaltaPorAreaFUND} na avaliação por área para passar na AV4`);
    
  }else if (PorAreaFUND > 0 && trimestralFUND == 0){
    let quantoFaltaInterdisciplinarFUND = ((6 - ((trimestralFUND * 0.4)+(PorAreaFUND*0.3)))/0.3);
    return alert(`Você precisa tirar ${quantoFaltaInterdisciplinarFUND} na interdisciplinar para passar na AV4`);
  }
  
}