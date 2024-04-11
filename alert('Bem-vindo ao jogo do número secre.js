alert("Bem-vindo ao jogo do número secreto");
let chute = prompt("Escolha um número entre 1 e 10");

let numeroSecreto = 4;

console.log(chute == numeroSecreto);
if (chute == numeroSecreto) {
  alert("Acertou");
} else {
  alert("O número secreto era " + numeroSecreto);
}
let idade = prompt("Digite sua idade:");

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

let porcentagemDesconto = 0;

if (quantidadeMilhas > 5000) {
  porcentagemDesconto = porcentagemDesconto + 10;
}

if (quantidadeMilhas >= 30000) {
  porcentagemDesconto = porcentagemDesconto + 20;
} else {
  porcentagemDesconto = 0;
}
