let diaSemana = prompt("Qual é o dia da semana?");

if (diaSemana === "Sábado" || diaSemana === "Domingo") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}

let numero = prompt("Digite um número:");

if (numero > 0) {
  alert("O número é positivo.");
} else if (numero < 0) {
  alert("O número é negativo.");
} else {
  alert("O número é zero.");
}

let pontuacao = prompt("Qual é a sua pontuação no jogo?");

if (pontuacao >= 100) {
  alert("Parabéns, você venceu!");
} else {
  alert("Tente novamente para ganhar.");
}

let saldo = 500; // Exemplo de saldo

alert(`Seu saldo atual é de R$${saldo.toFixed(2)}.`);

let nome = prompt("Qual é o seu nome?");

alert(`Bem-vindo, ${nome}!`);
