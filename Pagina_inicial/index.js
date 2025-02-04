const quantidadePresentes = 50;
const container = document.querySelector(".container_presentes");

// Definir os valores de velocidade mínima e máxima
const velocidadeMinima = 0.3;
const velocidadeMaxima = 10;

// Posições do botão
const botaoStart = document.querySelector('.start');
const botaoStartRect = botaoStart.getBoundingClientRect();
const botaoCentroX = botaoStartRect.left + botaoStartRect.width / 2;
const botaoCentroY = botaoStartRect.top + botaoStartRect.height / 2;

function calcularVelocidadeComBaseNaDistancia(x, y) {
    // Calcular a distância entre o cursor e o centro do botão
    const distancia = Math.sqrt(Math.pow(x - botaoCentroX, 2) + Math.pow(y - botaoCentroY, 2));
    
    // Distância máxima entre o cursor e o botão (considerando o tamanho da tela)
    const distanciaMaxima = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));

    // Mapear a distância para a velocidade
    const fatorVelocidade = distancia / distanciaMaxima; // Valor entre 0 e 1
    const velocidade = velocidadeMinima + fatorVelocidade * (velocidadeMaxima - velocidadeMinima);

    return velocidade;
}

// Atualizar a velocidade com base na posição do cursor
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
        posicaoY += velocidadeY * fatorVelocidade; // Multiplicar pela velocidade calculada
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

// Criar os presentes
for (let i = 0; i < quantidadePresentes; i++) {
    criarPresente();
}
