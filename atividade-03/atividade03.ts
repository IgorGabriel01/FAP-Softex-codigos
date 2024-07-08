const divRepostas = document.getElementById("respostas");

//Questão 5
const nome = prompt("Digite seu nome: ");

//Questão 6
const idade = Number(prompt("Digite sua idade: "));

//Questão 7
const numeroDecimal = Number(prompt("Digite um número inteiro: ")).toFixed(2);

//Questão 8
const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));

// Questão 9
const decimal = Number(prompt("Digite um número decimal: "));

// Questão 10
const anoNascimento = prompt("Digite seu ano de nascimento: ");

//Questão 11
const nome11 = prompt("Digite seu primero nome: ");
const sobrenome11 = prompt("Digite seu sobrenome: ");

//Questão 12
const quantidadeNumeros = Number(prompt("Quantos números você quer salvar?"));
const numeros: number[] = new Array();

for (let i = 0; numeros.length < quantidadeNumeros; i++) {
  numeros.push(Number(prompt(`Digite o seu ${i + 1} número`)));
}

//Questão 13
const nomeAnimal = prompt('Digite o nome de um animal: ');

//Questão 14 e 15
const nome14 = prompt('Digite seu nome: ');
const sobrenome14 = prompt('Digite seu sobrenome: ');

//Questão 16 e 17
const numero16 = Number(prompt('Digite um número: '));

//Respostas
const respostas = document.createElement("div");
respostas.innerHTML = `
    <h2>Questões 5 e 6</h2>
    <p>Olá ${nome}, você tem ${idade} anos!</p>

    <h2>Questões 7, 8 e 9</h2>
    <p>O número convertido para decimal: ${numeroDecimal}</p>
    <p>A soma dos números: ${num1 + num2}</p>
    <p>O quadrado do nosso número decimal: ${decimal * decimal}</p>

    <h2>Questões 10 e 11</h2>
    <p>Olá ${nome11} ${sobrenome11}, você nasceu em ${anoNascimento}!</p>

    <h2>Questão 12</h2>
    <p>Você quis um array de tamanho ${quantidadeNumeros} e os números do seu array são ${numeros}</p>

    <h2>Questão 13</h2>
    <p>Você digitou o nome do animal ${nomeAnimal}</p>

    <h2>Questões 14 e 15</h2>
    <p>Seu nome invertido é ${sobrenome14} ${nome14} e o tamanho do seu nome e sobrenome é ${Number(nome14?.length) + Number(sobrenome14?.length)}</p>

    <h2>Questões 16 e 17</h2>
    <p>O número digitado é ${numero16 % 2 == 0 ? 'par' : 'impar'} e ${numero16 > 0 ? 'positivo' : 'negativo'}</p>
`;

divRepostas?.appendChild(respostas);
