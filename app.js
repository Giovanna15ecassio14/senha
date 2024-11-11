alert("Boas-Vindas ao jogo do Número Secreto");
let numeroSecreto =7 ;
let chute= prompt("Escolha um número entre 1 e 100");

if (chute== numeroSecreto) {
    alert('Isso aí, você descobriu o número secreto  ${numeroSecreto}');
}  else{ 
    alert("Você errou!")
}