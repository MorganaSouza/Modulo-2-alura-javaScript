alert("Boas-vindas ao jogo do número secreto");
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute = prompt("Escolha um número entre 1 e 10");

// se o chute for igual ao numero secreto
if (chute == numeroSecreto) {
  alert(`Isso aí! você descobriu o número secreto ${numeroSecreto}`);
} else {
  alert("você errou:(");
}