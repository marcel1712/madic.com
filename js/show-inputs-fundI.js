var materiasFundInput = document.querySelector('#materiasFund');

materiasFundInput.addEventListener('input', () =>{

    var materiasFund = materiasFundInput.value;

    var forms = document.getElementById('forms-fund');

    if(selecionarMateriaFUND(materiasFund) == 1){
        forms.innerHTML = `
            <nav>
                <nav class="provas">
                    <p>Coloque sua nota da avaliação somativa:</p>
                    <input type="number" id="somativa">
                </nav>
                <nav>
                    <p>Coloque sua nota da avaliação formativa:</p>
                    <input type="number" id="formativa">
                </nav>
                <nav class="provas">
                    <p>Coloque sua nota da avaliação integrada:</p>
                    <input type="number" id="integrada">
                </nav>
                <nav class="provas">
                    <p>Coloque sua nota da avaliação diversificada:</p>
                    <input type="number" id="diversificada">
                    <a onclick="calcularMediaProvaGrupoIFUNDI()"><nav id="calcular-media">Calcular Média</nav></a>
                </nav>
                <nav id="mediaProvasFUND"></nav>
            </nav>
            <script src="media-prova-fundI.js"></script>
        `
    }else if(selecionarMateriaFUND(materiasFund) == 2){
        forms.innerHTML = `
            <nav>
            <nav class="provas">
                <p>Coloque sua nota da ativdade prática:</p>
                <input type="number" id="atividadePratica">
            </nav>
            <nav>
                <p>Coloque sua nota da atividade teórica:</p>
                <input type="number" id="atividadeTeorica">
            </nav>
            <nav class="provas">
                <p>Coloque sua nota de participação e engajamento:</p>
                <input type="number" id="participaçãoEngajamento">
            <a onclick="calcularMediaProvaGrupoIIFUNDI()"><nav id="calcular-media">Calcular Média</nav></a>
            </nav>
            <nav id="mediaProvasFUND"></nav>
            </nav>
            <script src="media-prova-fundI.js"></script>
        `
    }
})

function selecionarMateriaFUND(materiasFund){

    const grupo1 = ['História','Geografia','Ciências', 'Educação Física','Artes','Matemática','Português','Inglês','Espanhol','Japonês'];
    const grupo2 = ['Xadrez','Teatro','Música','Taikô','Soroban','Projeto de Vida','Maker','STEM','Educação Ambiental'];

    if(grupo1.indexOf(materiasFund) > -1){
        return 1
    }else if(grupo2.indexOf(materiasFund) > -1){
        return 2
    }
}