var divRepostas = document.getElementById("respostas");
//Questão 5
var nome = prompt("Digite seu nome: ");
//Questão 6
var idade = Number(prompt("Digite sua idade: "));
//Questão 7
var numeroDecimal = Number(prompt("Digite um número inteiro: ")).toFixed(2);
//Questão 8
var num1 = Number(prompt("Digite o primeiro número: "));
var num2 = Number(prompt("Digite o segundo número: "));
// Questão 9
var decimal = Number(prompt("Digite um número decimal: "));
// Questão 10
var anoNascimento = prompt("Digite seu ano de nascimento: ");
//Questão 11
var nome11 = prompt("Digite seu primero nome: ");
var sobrenome11 = prompt("Digite seu sobrenome: ");
//Questão 12
var quantidadeNumeros = Number(prompt("Quantos números você quer salvar?"));
var numeros = new Array();
for (var i = 0; numeros.length < quantidadeNumeros; i++) {
    numeros.push(Number(prompt("Digite o seu ".concat(i + 1, " n\u00FAmero"))));
}
//Questão 13
var nomeAnimal = prompt('Digite o nome de um animal: ');
//Questão 14 e 15
var nome14 = prompt('Digite seu nome: ');
var sobrenome14 = prompt('Digite seu sobrenome: ');
//Questão 16 e 17
var numero16 = Number(prompt('Digite um número: '));
//Respostas
var respostas = document.createElement("div");
respostas.innerHTML = "\n    <h2>Quest\u00F5es 5 e 6</h2>\n    <p>Ol\u00E1 ".concat(nome, ", voc\u00EA tem ").concat(idade, " anos!</p>\n\n    <h2>Quest\u00F5es 7, 8 e 9</h2>\n    <p>O n\u00FAmero convertido para decimal: ").concat(numeroDecimal, "</p>\n    <p>A soma dos n\u00FAmeros: ").concat(num1 + num2, "</p>\n    <p>O quadrado do nosso n\u00FAmero decimal: ").concat(decimal * decimal, "</p>\n\n    <h2>Quest\u00F5es 10 e 11</h2>\n    <p>Ol\u00E1 ").concat(nome11, " ").concat(sobrenome11, ", voc\u00EA nasceu em ").concat(anoNascimento, "!</p>\n\n    <h2>Quest\u00E3o 12</h2>\n    <p>Voc\u00EA quis um array de tamanho ").concat(quantidadeNumeros, " e os n\u00FAmeros do seu array s\u00E3o ").concat(numeros, "</p>\n\n    <h2>Quest\u00E3o 13</h2>\n    <p>Voc\u00EA digitou o nome do animal ").concat(nomeAnimal, "</p>\n\n    <h2>Quest\u00F5es 14 e 15</h2>\n    <p>Seu nome invertido \u00E9 ").concat(sobrenome14, " ").concat(nome14, " e o tamanho do seu nome e sobrenome \u00E9 ").concat(Number(nome14 === null || nome14 === void 0 ? void 0 : nome14.length) + Number(sobrenome14 === null || sobrenome14 === void 0 ? void 0 : sobrenome14.length), "</p>\n\n    <h2>Quest\u00F5es 16 e 17</h2>\n    <p>O n\u00FAmero digitado \u00E9 ").concat(numero16 % 2 == 0 ? 'par' : 'impar', " e ").concat(numero16 > 0 ? 'positivo' : 'negativo', "</p>\n");
divRepostas === null || divRepostas === void 0 ? void 0 : divRepostas.appendChild(respostas);
