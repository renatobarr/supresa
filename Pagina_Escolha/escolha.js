
window.onload = function() {
    setTimeout(() => {
        var boxInformacao = document.querySelector('.boxInformacao');
        boxInformacao.classList.remove('animacaoScaleSaida');
        void boxInformacao.offsetWidth;
        boxInformacao.classList.add('animacaoScale');
        document.querySelector('.tela').classList.add('visivel');
    }, 500); 
};

function animacaoboxMaterialista(){

    var buttonMaterialista = document.getElementById('dicamaterialista')
    var boxMaterialista = document.querySelector('.boxMaterialista')
    
    buttonMaterialista.classList.remove('animacaoPulse');
    void buttonMaterialista.offsetWidth;
    buttonMaterialista.classList.add('animacaoPulse');
    boxMaterialista.classList.toggle('visivel');
 
}
document.getElementById('dicamaterialista').addEventListener('click', animacaoboxMaterialista);

function animacaoboxRomantico(){

    var buttonRomantico = document.getElementById('dicaromantico')
    var boxRomantico = document.querySelector('.boxRomantico')

    buttonRomantico.classList.remove('animacaoPulse');
    void buttonRomantico.offsetWidth;
    buttonRomantico.classList.add('animacaoPulse');
    boxRomantico.classList.toggle('visivel');
   
}
document.getElementById('dicaromantico').addEventListener('click', animacaoboxRomantico);

function animacaoboxHyghTech(){

    var buttonHyghTech = document.getElementById('dicahyghtech')
    var boxHyghTech = document.querySelector('.boxHyghTech')
    
    buttonHyghTech.classList.remove('animacaoPulse');
    void buttonHyghTech.offsetWidth;
    buttonHyghTech.classList.add('animacaoPulse');
    boxHyghTech.classList.toggle('visivel');
}
document.getElementById('dicahyghtech').addEventListener('click', animacaoboxHyghTech);

function exibirBoxConfirmacao(tipo) {

    var tela = document.querySelector('.tela');
    var boxConfirmacao = document.querySelector('.boxConfirmacao');
    var textoConfirmacao = document.querySelector('.textoConfirmacao');
    var button; 

    // Identifica o botão clicado e define a mensagem correspondente
    if (tipo === 'materialista') {
        button = document.getElementById('materialista');
        textoConfirmacao.innerHTML = 'Você optou pela opção <b style="color: rgb(21, 255, 0);">Materialista</b>, é isso mesmo cretininha?';
    } else if (tipo === 'romantico') {
        button = document.getElementById('romantico');
        textoConfirmacao.innerHTML = 'Você optou pela opção <b style="color: rgb(255, 0, 170);">Romântico</b>, é isso mesmo cretininha?';
    } else if (tipo === 'hytech') {
        button = document.getElementById('hyghtech');
        textoConfirmacao.innerHTML = 'Você optou pela opção <b style="color: rgb(0, 251, 255);">HighTech</b>, é isso mesmo cretininha?';
    }


    button.classList.remove('animacaoPulse');
    void button.offsetWidth; 
    button.classList.add('animacaoPulse');

  
    boxConfirmacao.classList.remove('animacaoScaleSaida');
    void boxConfirmacao.offsetWidth;
    tela.classList.add('visivel');
    boxConfirmacao.classList.add('animacaoScale');
}

document.getElementById('materialista').addEventListener('click', () => exibirBoxConfirmacao('materialista'));
document.getElementById('romantico').addEventListener('click', () => exibirBoxConfirmacao('romantico'));
document.getElementById('hyghtech').addEventListener('click', () => exibirBoxConfirmacao('hytech'));

function animacaoSim(){

    var button = document.getElementById('confirmarButton')

    button.classList.remove('animacaoPulse');
    void button.offsetWidth;
    button.classList.add('animacaoPulse');
    
}
document.getElementById('confirmarButton').addEventListener('click', animacaoSim);


function animacaoNao() {
    var tela = document.querySelector('.tela');
    var boxConfirmacao = document.querySelector('.boxConfirmacao');
    var buttonCancelar = document.getElementById('cancelarButton');

    buttonCancelar.classList.remove('animacaoPulse');
    void buttonCancelar.offsetWidth;
    buttonCancelar.classList.add('animacaoPulse');

    boxConfirmacao.classList.remove('animacaoScale');
    void boxConfirmacao.offsetWidth;
    tela.classList.remove('visivel');
    boxConfirmacao.classList.add('animacaoScaleSaida');
}

document.getElementById('cancelarButton').addEventListener('click', animacaoNao);

function animacaoNaoInf() {
    var tela = document.querySelector('.tela');
    var boxConfirmacao = document.querySelector('.boxInformacao');
    var buttonCancelar = document.getElementById('informarButtonInf');

    buttonCancelar.classList.remove('animacaoPulse');
    void buttonCancelar.offsetWidth;
    buttonCancelar.classList.add('animacaoPulse');

    boxConfirmacao.classList.remove('animacaoScale');
    void boxConfirmacao.offsetWidth;
    tela.classList.remove('visivel');
    boxConfirmacao.classList.add('animacaoScaleSaida');
}

document.getElementById('informarButtonInf').addEventListener('click', animacaoNaoInf);



