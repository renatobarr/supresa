const quantidadePresentes = 50;
const container = document.querySelector(".container_presentes");

const velocidadeMinima = 0.3;
const velocidadeMaxima = 10;

const botaoStart = document.querySelector('.start');
const botaoStartRect = botaoStart.getBoundingClientRect();
const botaoCentroX = botaoStartRect.left + botaoStartRect.width / 2;
const botaoCentroY = botaoStartRect.top + botaoStartRect.height / 2;

function calcularVelocidadeComBaseNaDistancia(x, y) {
    
    const distancia = Math.sqrt(Math.pow(x - botaoCentroX, 2) + Math.pow(y - botaoCentroY, 2));
    
    const distanciaMaxima = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));

    const fatorVelocidade = distancia / distanciaMaxima; 
    const velocidade = velocidadeMinima + fatorVelocidade * (velocidadeMaxima - velocidadeMinima);

    return velocidade;
}


let fatorVelocidade = velocidadeMinima;

document.addEventListener("mousemove", (event) => {
    fatorVelocidade = calcularVelocidadeComBaseNaDistancia(event.clientX, event.clientY);
});

function criarPresente() {
    const presente = document.createElement("img");
    presente.src = "../imagens/present.png";
    presente.classList.add("presente");
    container.appendChild(presente);

    let posicaoY = -100;
    let posicaoX = Math.random() * window.innerWidth;
    let velocidadeY = Math.random() * 3 + 2;
    let velocidadeX = Math.random() * 3 - 1.5;
    let rotacao = Math.random() * 360;
    let rotacaoVelocidade = Math.random() * 4 - 2;

    function animar() {
        posicaoY += velocidadeY * fatorVelocidade; 
        posicaoX += velocidadeX;
        rotacao += rotacaoVelocidade;

        presente.style.top = `${posicaoY}px`;
        presente.style.left = `${posicaoX}px`;
        presente.style.transform = `rotate(${rotacao}deg)`;

        if (posicaoY > window.innerHeight) {
            posicaoY = -100;
            posicaoX = Math.random() * window.innerWidth;
            velocidadeX = Math.random() * 3 - 1.5;
            velocidadeY = Math.random() * 3 + 2;
            rotacao = Math.random() * 360;
            rotacaoVelocidade = Math.random() * 4 - 2;
        }

        requestAnimationFrame(animar);
    }

    animar();
}

for (let i = 0; i < quantidadePresentes; i++) {
    criarPresente();
}

function animacaoButao(){
    
    var button = document.getElementById('start')
    button.classList.remove('animacaoButao');
    void button.offsetWidth;
    button.classList.add('animacaoButao');

    setTimeout(function(){
        window.location.href = '../Pagina_Escolha/escolha.html';
    },300);


}