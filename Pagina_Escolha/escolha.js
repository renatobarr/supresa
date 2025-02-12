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

function animacaoHyghTech(){

    var buttonHyghTech = document.getElementById('hyghtech')

    buttonHyghTech.classList.remove('animacaoPulse');
    void buttonHyghTech.offsetWidth;
    buttonHyghTech.classList.add('animacaoPulse');
    
}
document.getElementById('hyghtech').addEventListener('click', animacaoHyghTech);

function animacaoRomantico(){

    var button = document.getElementById('romantico')

    button.classList.remove('animacaoPulse');
    void button.offsetWidth;
    button.classList.add('animacaoPulse');
    
}
document.getElementById('romantico').addEventListener('click', animacaoRomantico);

function animacaoMaterialista(){

    var button = document.getElementById('materialista')

    button.classList.remove('animacaoPulse');
    void button.offsetWidth;
    button.classList.add('animacaoPulse');
    
}
document.getElementById('materialista').addEventListener('click', animacaoMaterialista);


