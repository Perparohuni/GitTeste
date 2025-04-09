let listaNumba = [];
let hardCore = 10;
numeroSecreto = leNumo();
let tentativas = 0;

function texto(tag, texto) {
    let uTexto = document.querySelector(tag);
    uTexto.innerHTML = texto;
   if ('speechSynthesis' in window) {
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR'; 
    utterance.rate = 1.2; 
    window.speechSynthesis.speak(utterance); 
} else {
    console.log("Web Speech API não suportada neste navegador.");
}
}

function leStarte() {
    texto('h1', 'Jogo dus número que não sabo');
    texto('p', 'Espique um número imediatamente');
}

leStarte();

function verificarChute() {
    tentativas++;
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let leTenta = tentativas <= 1 ? 'trai' : 'trais';
        texto('h1', 'Véri gudi ma bói'); texto('p', 'Ustedes teikou ' + tentativas + " " + leTenta);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        texto('h1', 'Falhaste meu caro jacobino');
        if (chute > numeroSecreto) {texto('p', 'Le trufi eres esmal');}
        else {texto('p', 'Le trufi eres bigger');}
        limparCampo();
    }
}
function leNumo() {
    let numbaLista = listaNumba.length;
    let leNuma = parseInt(Math.random() * hardCore + 1);
    if (numbaLista == hardCore) {listaNumba = [];}
    if (listaNumba.includes(leNuma)) {return leNumo();}
    else {listaNumba.push(leNuma); return leNuma;}
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function outraVez() {
    numeroSecreto = leNumo();
    limparCampo();
    tentativas = 0;
    leStarte();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}