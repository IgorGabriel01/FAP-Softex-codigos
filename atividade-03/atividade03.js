//Questões 5 e 6
var questoes5e6 = function () {
    var nome = prompt("Digite seu nome: ");
    var idade = Number(prompt("Digite sua idade: "));
    var respostas5e6 = document.getElementById('respostas5e6');
    if (respostas5e6) {
        respostas5e6.innerText = "Ol\u00E1 ".concat(nome, ", sua idade \u00E9 ").concat(idade);
    }
};
//Questões 7, 8 e 9
var questoes78e9 = function () {
    var numeroDecimal = Number(prompt("Digite um número inteiro: ")).toFixed(2);
    var num1 = Number(prompt("Digite o primeiro número: "));
    var num2 = Number(prompt("Digite o segundo número: "));
    var decimal = Number(prompt("Digite um número decimal: "));
    var respostas78e9 = document.getElementById('respostas78e9');
    if (respostas78e9) {
        respostas78e9.innerText = "\n      . n\u00FAmero convertido para decimal: ".concat(numeroDecimal, "\n      . A soma dos n\u00FAmeros: ").concat(num1 + num2, "\n      . O quadrado do nosso n\u00FAmero decimal: ").concat(decimal * decimal, "\n    ");
    }
};
//Questão 10 e 11
var questoes10e11 = function () {
    var anoNascimento = Number(prompt("Digite seu ano de nascimento: "));
    var nome11 = prompt("Digite seu primero nome: ");
    var sobrenome11 = prompt("Digite seu sobrenome: ");
    var respostas10e11 = document.getElementById('respostas10e11');
    if (respostas10e11) {
        respostas10e11.innerText = "Ol\u00E1 ".concat(nome11, " ").concat(sobrenome11, ", voc\u00EA tem ").concat(2024 - anoNascimento, " anos!");
    }
};
//Questão 12
var questao12 = function () {
    var quantidadeNumeros = Number(prompt("Quantos números você quer salvar?"));
    var numeros = new Array();
    for (var i = 0; numeros.length < quantidadeNumeros; i++) {
        numeros.push(Number(prompt("Digite o seu ".concat(i + 1, " n\u00FAmero"))));
    }
    var respostas12 = document.getElementById('respostas12');
    if (respostas12) {
        respostas12.innerText = "Voc\u00EA quis um array de tamanho ".concat(quantidadeNumeros, " e os n\u00FAmeros do seu array s\u00E3o ").concat(numeros);
    }
};
//Questão 13
var questao13 = function () {
    var nomeAnimal = prompt('Digite o nome de um animal: ');
    var respostas13 = document.getElementById('respostas13');
    if (respostas13) {
        respostas13.innerText = "Voc\u00EA digitou o nome do animal ".concat(nomeAnimal);
    }
};
//Questão 14 e 15
var questao14e15 = function () {
    var nome14 = prompt('Digite seu nome: ');
    var sobrenome14 = prompt('Digite seu sobrenome: ');
    var respostas14 = document.getElementById('respostas14e15');
    if (respostas14) {
        respostas14.innerText = "Seu nome invertido \u00E9 ".concat(sobrenome14, " ").concat(nome14, " e o tamanho do seu nome e sobrenome \u00E9 ").concat(Number(nome14 === null || nome14 === void 0 ? void 0 : nome14.length) + Number(sobrenome14 === null || sobrenome14 === void 0 ? void 0 : sobrenome14.length));
    }
};
//Questão 16 e 17
var questao16e17 = function () {
    var numero16 = Number(prompt('Digite um número: '));
    var respostas16e17 = document.getElementById('respostas16e17');
    if (respostas16e17) {
        respostas16e17.innerText = "O n\u00FAmero digitado \u00E9 ".concat(numero16 % 2 == 0 ? 'par' : 'impar', " e ").concat(numero16 > 0 ? 'positivo' : 'negativo');
    }
};
//Questão 18
var questao18 = function () {
    var num1 = Number(prompt('Digite o primeiro número: '));
    var num2 = Number(prompt('Digite o segundo número: '));
    var respostas18 = document.getElementById('respostas18');
    if (respostas18) {
        respostas18.innerText = "".concat(num1 > num2 ? "".concat(num1, " \u00E9 maior que ").concat(num2) : "".concat(num2, " \u00E9 maior que ").concat(num1));
    }
};
//Questão 19
var questao19 = function () {
    var peso = Number(prompt('Digite o seu peso: '));
    var altura = Number(prompt('Digite a sua altura: '));
    var imc = peso / (altura * altura);
    var respostas19 = document.getElementById('respostas19');
    if (respostas19) {
        respostas19.innerHTML = "Seu IMC \u00E9: ".concat(imc.toFixed(2));
    }
};
//Questão 20
var questao20 = function () {
    var nome = prompt('Digite o seu nome: ');
    var respostas20 = document.getElementById('respostas20');
    if (respostas20) {
        if (nome) {
            respostas20.innerHTML = "".concat((nome === null || nome === void 0 ? void 0 : nome.length) > 5 ? 'Seu nome tem mais que 5 caracteres!' : 'seu nome tem menos que 5 caracteres!');
        }
    }
};
//Questão 21
var questao21 = function () {
    var estadoCivil = prompt('Digite seu estado civil: ');
    var respostas21 = document.getElementById('respostas21');
    if (respostas21) {
        respostas21.innerText = "Seu estado c\u00EDvil \u00E9: ".concat(estadoCivil);
    }
};
//Questão 22
var questao22 = function () {
    var base = Number(prompt('Digite a base do seu retângulo: '));
    var altura = Number(prompt('Digite a altura do seu retângulo: '));
    var respostas22 = document.getElementById('respostas22');
    if (respostas22) {
        respostas22.innerText = "A \u00E1rea do ret\u00E2ngulo \u00E9: ".concat(base * altura, " ");
    }
};
//Questão 23
var questao23 = function () {
    var cidade = prompt('Digite sua cidade: ');
    var respostas23 = document.getElementById('respostas23');
    if (respostas23) {
        if (cidade) {
            respostas23.innerText = "A sua cidade ".concat(cidade[0].toLowerCase() === 'r' ? 'inicia com R' : 'não inicia com R');
        }
    }
};
//Questão 24
var questao24 = function () {
    var num1 = Number(prompt('Digite o primeiro número: '));
    var num2 = Number(prompt('Digite o segundo número: '));
    var respostas24 = document.getElementById('respostas24');
    if (respostas24) {
        respostas24.innerText = "O resto da divis\u00E3o dos dois n\u00FAmeros \u00E9: ".concat(num1 % num2);
    }
};
//Questão 25
var questao25 = function () {
    var num = Number(prompt('Digite um número decimal: '));
    var respostas25 = document.getElementById('respostas25');
    if (respostas25) {
        respostas25.innerText = "O n\u00FAmero convertido decimal convertido para inteiro \u00E9: ".concat(Math.round(num));
    }
};
//Questão 26
var questao26 = function () {
    var num = prompt('Digite um número: ');
    var concatena;
    if (num) {
        concatena = num + 10;
    }
    var respostas26 = document.getElementById('respostas26');
    if (respostas26) {
        respostas26.innerText = "O n\u00FAmero em string somado com 10 \u00E9 igual a: ".concat(concatena);
    }
};
//Questão 27
var questao27 = function () {
    var data = prompt('Digite a data completa: ');
    var convertData;
    var respostas27 = document.getElementById('respostas27');
    if (data) {
        convertData = data.split("/");
        if (respostas27) {
            respostas27.innerText = "\n      Dia: ".concat(convertData[0], "\n      M\u00EAs: ").concat(convertData[1], "\n      Ano: ").concat(convertData[2], "\n      ");
        }
    }
};
//Questão 28
var questao28 = function () {
    var cidade = prompt('Digite sua cidade: ');
    var estado = prompt('Digite seu estado: ');
    var respostas28 = document.getElementById('respostas28');
    if (respostas28) {
        respostas28.innerText = "Voc\u00EA mora em ".concat(cidade, ", ").concat(estado);
    }
};
//Questão 29
var questao29 = function () {
    var anoNascimento = prompt('Digite seu ano de nascimento: ');
    var respostas29 = document.getElementById('respostas29');
    if (respostas29) {
        respostas29.innerText = "Bem-vindo ao nosso programa, nascido em ".concat(anoNascimento);
    }
};
//Questão 30
var questao30 = function () {
    var numInteiro = prompt('Digite um número inteiro: ');
    var string = prompt('Digite um texto: ');
    var concatena;
    if (numInteiro && string) {
        concatena = numInteiro + string;
    }
    var respostas30 = document.getElementById('respostas30');
    if (respostas30) {
        respostas30.innerText = "Vari\u00E1veis concatenadas: ".concat(concatena);
    }
};
//Questão 31
var questao31 = function () {
    var produto = prompt('Digite o nome de um produto: ');
    var preco = prompt('Digite preço do produto: ');
    var respostas31 = document.getElementById('respostas31');
    if (respostas31) {
        respostas31.innerText = "\n    Produto: ".concat(produto, " \n    Pre\u00E7o: ").concat(preco, "\n    ");
    }
};
//Questão 32
var questao32 = function () {
    var numInteiro = Number(prompt('Digite um número inteiro: '));
    var respostas32 = document.getElementById('respostas32');
    if (respostas32) {
        respostas32.innerText = "O dobro do n\u00FAmero informado \u00E9: ".concat(numInteiro * 2);
    }
};
//Questão 33
var questao33 = function () {
    var email = prompt('Digite seu endereço de email: ');
    var respostas33 = document.getElementById('respostas33');
    if (respostas33) {
        respostas33.innerText = "Endere\u00E7o de email ".concat(email, " cadastrado!");
    }
};
//Questão 34
var questao34 = function () {
    var num1 = Number(prompt('Digite o primeiro número: '));
    var num2 = Number(prompt('Digite o segundo número: '));
    var respostas34 = document.getElementById('respostas34');
    if (respostas34) {
        respostas34.innerText = "\n    Soma: ".concat(num1 + num2, "\n    Diferen\u00E7a: ").concat(num1 - num2, "\n    Produto: ").concat(num1 * num2, "\n    Quociente: ").concat(num1 / num2, "\n    ");
    }
};
//Questão 35
var questao35 = function () {
    var base = Number(prompt('Digite a base do triângulo: '));
    var altura = Number(prompt('Digite a altura do triângulo: '));
    var respostas35 = document.getElementById('respostas35');
    if (respostas35) {
        respostas35.innerText = "\n    A \u00E1rea do tri\u00E2ngulo: ".concat((base * altura) / 2, "\n    ");
    }
};
//Questão 36
var questao36 = function () {
    var raio = Number(prompt('Digite o raio da circunferência: '));
    var respostas36 = document.getElementById('respostas36');
    if (respostas36) {
        respostas36.innerText = "\n    Per\u00EDmetro da circunfer\u00EAncia: ".concat((2 * Math.PI * raio).toFixed(2), "\n    ");
    }
};
//Questão 37
var questao37 = function () {
    var base = Number(prompt('Digite a base do retângulo: '));
    var altura = Number(prompt('Digite a altura do retângulo: '));
    var respostas37 = document.getElementById('respostas37');
    if (respostas37) {
        respostas37.innerText = "\n    Per\u00EDmetro do ret\u00E2ngulo: ".concat(2 * (base + altura), "\n    ");
    }
};
//Questão 38
var questao38 = function () {
    var num1 = Number(prompt('Digite o primero número decimal: '));
    var num2 = Number(prompt('Digite o segundo número decimal: '));
    var num3 = Number(prompt('Digite o terceiro número decimal: '));
    var respostas38 = document.getElementById('respostas38');
    if (respostas38) {
        respostas38.innerText = "\n    M\u00E9dia artim\u00E9tica: ".concat(((num1 + num2 + num3) / 3).toFixed(2), "\n    ");
    }
};
//Questão 39
var questao39 = function () {
    var idade = Number(prompt('Digite sua idade: '));
    var respostas39 = document.getElementById('respostas39');
    if (respostas39) {
        respostas39.innerText = "\n    Meses vividos: ".concat(idade * 12, "\n    Dias vividos: ").concat(idade * 365, "\n    ");
    }
};
//Questão 40
var questao40 = function () {
    var valor = Number(prompt('Digite o valor em reais: '));
    var cotacao = Number(prompt('Digite a cotação do dolar: '));
    var respostas40 = document.getElementById('respostas40');
    if (respostas40) {
        respostas40.innerText = "O valor convertido \u00E9: ".concat(valor * cotacao);
    }
};
//Questão 41
var questao41 = function () {
    var decimal = Number(prompt('Digite um número decimal: '));
    var respostas41 = document.getElementById('respostas41');
    if (respostas41) {
        respostas41.innerText = "O valor convertido \u00E9: ".concat(Math.round(decimal));
    }
};
//Questão 42
var questao42 = function () {
    var num1 = Number(prompt('Primeiro número inteiro: '));
    var num2 = Number(prompt('Segundo número inteiro: '));
    var num3 = Number(prompt('Terceiro número inteiro: '));
    var respostas42 = document.getElementById('respostas42');
    if (respostas42) {
        respostas42.innerText = "Resultado da opera\u00E7\u00E3o: ".concat((num1 + num2) * num3);
    }
};
//Questão 43
var questao43 = function () {
    var celsius = Number(prompt('Digite a temperatura em celsius: '));
    var respostas43 = document.getElementById('respostas43');
    if (respostas43) {
        respostas43.innerText = "Temperatura em Fahrenheit: ".concat((celsius * 9 / 5) + 32);
    }
};
