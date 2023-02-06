var materiasEmInput = document.querySelector(`#materiasEm`);

materiasEmInput.addEventListener(`input`, ()=> {

    var materiasEm = materiasEmInput.value;

    var forms = document.getElementById(`forms-em`);

    if(selecionarMateriaEM(materiasEm) == 1){
        forms.innerHTML = `
            <nav id="interdiciplinar" class="provas">
                <p>Coloque sua nota da prova de <br>multipla escolha por área:</p>
                <input type="number" id="av1-EM">
                <a onclick="CalculoQuantoFaltaAVIEM()"><nav class="button-calcular">Quanto precisa</nav></a>
            </nav>
            
            <nav id="trimestral" class="provas">
                <p>Coloque sua nota da prova <br>específica dissertativa:</p>
                <input type="number" id="av2-EM">
                <a onclick="CalculoQuantoFaltaAVIIEM()"><nav class="button-calcular">Quanto precisa</nav></a>
            </nav>
            
            <nav id="trimestral" class="provas">
                <p>Coloque sua nota do <br>simulado personalizado:</p>
                <input type="number" id="av3-EM">
                <a onclick="CalculoQuantoFaltaAVIIIEM()"><nav class="button-calcular">Quanto precisa</nav></a>
                <a onclick="calcularMediaProvaGrupoIEM()"><nav id="calcular-media">Calcular Média da AV4</nav></a>
            </nav>
            <nav id="media-provas-EM"></nav>
            </nav>
            <nav id="separacao"><nav></nav></nav>
            <nav id="media-trimestre">
            
            <p>Coloque sua nota de recuperação <br>ou a média da AV4:</p>
            <input type="number" id="av5-EM">
            <p>Coloque sua nota do <br>Geekie Test:</p>
            <input type="number" id="av6-EM">
            <p>Coloque sua nota de <br>entrega engajamento:</p>
            <input type="number" id="av7-EM">
            
            <a onclick="mediaTrimestreEM()"><nav id="calcular-media">Calcular Média do Trimestre</nav></a>
            </nav>
            <nav id="media-trimestre-em"></nav>
        `
    }
    else if(selecionarMateriaEM(materiasEm) == 2){
        forms.innerHTML = `
        <nav id="interdiciplinar" class="provas">
        <p>Coloque sua nota da <br>primeira produção:</p>
        <input type="number" id="av1-EM">
        <a onclick="CalculoQuantoFaltaEMInterdisciplinar()"><nav class="button-calcular">Quanto precisa</nav></a>
        </nav>
        
        <nav id="trimestral" class="provas">
            <p>Coloque sua nota da <br>segunda produção:</p>
            <input type="number" id="av2-EM">
            <a onclick="CalculoQuantoFaltaEMSimulado()"><nav class="button-calcular">Quanto precisa</nav></a>
        </nav>
        
        <nav id="trimestral" class="provas">
            <p>Coloque sua nota do <br>simulado personalizado:</p>
            <input type="number" id="av3-EM">
            <a onclick="CalculoQuantoFaltaEMTrimestral()"><nav class="button-calcular">Quanto precisa</nav></a>
            <a onclick="calcularMediaProvaGrupoIIEM()"><nav id="calcular-media">Calcular Média da AV4</nav></a>
        </nav>
        <nav id="media-provas-EM"></nav>
        </nav>
        <nav id="separacao"><nav></nav></nav>
        <nav id="media-trimestre">
        
        <p>Coloque sua nota de recuperação <br>ou a média da AV4:</p>
        <input type="number" id="av5-EM">
        <p>Coloque sua nota do <br>Geekie Test:</p>
        <input type="number" id="av6-EM">
        <p>Coloque sua nota de <br>entrega e engajamento:</p>
        <input type="number" id="av7-EM">
        
        <a onclick="mediaTrimestreEM()"><nav id="calcular-media">Calcular Média do Trimestre</nav></a>
        </nav>
        <script src="./media-trimestre-em.js"></script>
        <script src="./media-prova-em.js"></script>
        <script src="./quanto-falta-em.js"></script>
        `
    }
    else if(selecionarMateriaEM(materiasEm) == 3){
        forms.innerHTML = ` 
        <p>Coloque sua nota da <br>avaliação processual:</p>
        <input type="number" id="av1-EM">
        <p>Coloque sua média das <br>atividades avaliativas:</p>
        <input type="number" id="av2-EM">
        <p>Coloque sua nota da <br>autoavaliação:</p>
        <input type="number" id="av3-EM">
        
        <a onclick="calcularMediaProvaGrupoIIIEM()"><nav id="calcular-media">Calcular Média do Trimestre</nav></a>
        </nav>
        <script src="./media-trimestre-em.js"></script>
        <script src="./media-prova-em.js"></script>
        <script src="./quanto-falta-em.js"></script>
        `
    }else if(selecionarMateriaEM(materiasEm) == 4){
        forms.innerHTML = `
        <p>Coloque sua nota da AV1:</p>
        <input type="number" id="av1-EM">
        <p>Coloque sua nota de <br>apresentação e entrega:</p>
        <input type="number" id="av2-EM">
        
        <a onclick="calcularMediaProvaGrupoIVEM()"><nav id="calcular-media">Calcular Média do Trimestre</nav></a>
        </nav>
        <script src="./media-trimestre-em.js"></script>
        <script src="./media-prova-em.js"></script>
        <script src="./quanto-falta-em.js"></script>
        `
    }

})


function selecionarMateriaEM(materiasEm){

    const grupo1 = [`Literatura`,`Gramática`, 'Inglês', 'Sociologia', 'Filosofia', 'Geografia', 'História', 'Física', 'Química', 'Biologia', 'Geometria', 'Álgebra'];
    const grupo2 = [`Redação`];
    const grupo3 = [`Arte`, `Projeto de Vida`, `Educação Física`];
    const grupo4 = [`Trilhas`];

    if(grupo1.indexOf(materiasEm) > -1){
        return 1
    }else if(grupo2.indexOf(materiasEm) > -1){
        return 2
    }else if(grupo3.indexOf(materiasEm) > -1){
        return 3
    }else if(grupo4.indexOf(materiasEm) > -1){
        return 4
    }
}