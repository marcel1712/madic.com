var materiasFundInput = document.querySelector('#materiasFund');

materiasFundInput.addEventListener('input', function materia(){

    var materiasFund = materiasFundInput.value;

    var forms = document.getElementById('forms-fund');

    if(selecionarMateriaFUND(materiasFund) == 1){
        forms.innerHTML = `
            <nav>
                <nav id="interdiciplinar" class="provas">
                    <p>Coloque sua nota da avaliação interdisciplinar:</p>
                    <input type="number" id="interdisciplinar-FUND">
                </nav>
                <nav>
                    <p>Coloque sua avaliações parciais por área:</p>
                    <input type="number" id="PorArea-FUND">
                </nav>
                <nav id="trimestral" class="provas">
                    <p>Coloque sua nota da avaliação trimestral:</p>
                    <input type="number" id="trimestral-FUND">
                <a onclick="calcularMediaProvaGrupoIFUND()"><nav id="calcular-media">Calcular Média</nav></a>
                </nav>
                <nav id="mediaProvasFUND"></nav>
            </nav>
            <nav id="separacao"><nav></nav></nav>
            <nav>
                <p>Média das provas / Nota de recuperação</p>
                <input type="number" id="av5-FUND">
                <p>Geekie Teste:</p>
                <input type="number" id="av6-FUND">
                <p>Entrega e engajamento:</p>
                <input type="number" id="av7-FUND">

                <a onclick="mediaTrimestreGrupoIFUND()"><nav id="calcular-media">Calcular Média do Trimestre</nav></a>
            </nav>
            <script src="media-prova-fund.js"></script>
            <script src="media-trimestre-fund.js"></script>
        `
    }else if(selecionarMateriaFUND(materiasFund) == 2){
        forms.innerHTML = `
            <nav>
            <nav id="interdiciplinar" class="provas">
                <p>Coloque sua nota da avaliação interdisciplinar:</p>
                <input type="number" id="interdisciplinar-FUND">
            </nav>
            <nav>
                <p>Coloque sua nota do simulado de proficiência:</p>
                <input type="number" id="simuladoProficiencia-FUND">
            </nav>
            <nav id="trimestral" class="provas">
                <p>Coloque sua nota da avaliação trimestral:</p>
                <input type="number" id="trimestral-FUND">
            <a onclick="calcularMediaProvaGrupoIIFUND()"><nav id="calcular-media">Calcular Média</nav></a>
            </nav>
            <nav id="mediaProvasFUND"></nav>
            </nav>
            <nav id="separacao"><nav></nav></nav>
            <nav>
                <p>Média das provas / Nota de recuperação</p>
                <input type="number" id="av5-FUND">
                <p>Entrega e engajamento:</p>
                <input type="number" id="av7-FUND">

                <a onclick="mediaTrimestreGrupoIIFUND()"><nav id="calcular-media">Calcular Média do Trimestre</nav></a>
            </nav>
            <script src="media-prova-fund.js"></script>
            <script src="media-trimestre-fund.js"></script>
        `
    }else if(selecionarMateriaFUND(materiasFund) == 3){
        forms.innerHTML = `
            <nav>
            <nav id="interdiciplinar" class="provas">
                <p>Coloque sua nota da avaliação interdisciplinar:</p>
                <input type="number" id="interdisciplinar-FUND">
            </nav>
            <nav>
                <p>Coloque sua nota da avaliação processual:</p>
                <input type="number" id="simuladoProficiencia-FUND">
            </nav>
            <nav>
                <p>Coloque sua nota da Autoavaliação / autodiagnóstico e plano de Ação:</p>
                <input type="number" id="autoavaliação-FUND">
            </nav>
            <nav id="trimestral" class="provas">
                <p>Coloque sua nota das atividades avaliativas e/ou projeto:</p>
                <input type="number" id="atividadeavaliativas-FUND">
            <a onclick="calcularMediaProvaGrupoIIIFUND()"><nav id="calcular-media">Calcular Média</nav></a>
            </nav>
            <nav id="mediaProvasFUND"></nav>
            </nav>
            <script src="media-prova-fund.js"></script>
        `
    }else if(selecionarMateriaFUND(materiasFund) == 4){
        forms.innerHTML = `
        <nav>
        <nav id="interdiciplinar" class="provas">
            <p>Coloque sua nota de participação e engajamento:</p>
            <input type="number" id="participaçãoEngajamento-FUND">
        </nav>
        <nav id="trimestral" class="provas">
            <p>Coloque sua nota de apresentação e entrega:</p>
            <input type="number" id="apresentação-FUND">
        <a onclick="calcularMediaProvaGrupoIVFUND()"><nav id="calcular-media">Calcular Média</nav></a>
        </nav>
        <nav id="mediaProvasFUND"></nav>
        <script src="media-prova-fund.js"></script>
        `
    }

})

function selecionarMateriaFUND(materiasFund){

    let grupo1 = ['RIPT','Gramática','Matemática I', 'Matemática II','História','Geografia','Ciências','Química/Física'];
    let grupo2 = ['Inglês','Espanhol','Japonês'];
    let grupo3 = ['Educação Física','Arte','Empreendedorismo Maker','Projeto de Vida','Música','Oratória'];
    let grupo4 = ['Núcleos Eletivos Formativos', 'STEM', 'Educação Ambiental'];

    if(grupo1.indexOf(materiasFund) > -1){
        return 1
    }else if(grupo2.indexOf(materiasFund) > -1){
        return 2
    }else if(grupo3.indexOf(materiasFund) > -1){
        return 3
    }else if(grupo4.indexOf(materiasFund) > -1){
        return 4
    }

}