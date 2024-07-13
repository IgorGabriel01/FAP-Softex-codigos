//Questões 5 e 6
const questoes5e6 = () => {
  const nome = prompt("Digite seu nome: ");

  const idade = Number(prompt("Digite sua idade: "));

  const respostas5e6 = document.getElementById('respostas5e6');

  if (respostas5e6) {
    respostas5e6.innerText = `Olá ${nome}, sua idade é ${idade}`;
  }
}

//Questões 7, 8 e 9
const questoes78e9 = () => {

  const numeroDecimal = Number(prompt("Digite um número inteiro: ")).toFixed(2);

  const num1 = Number(prompt("Digite o primeiro número: "));
  const num2 = Number(prompt("Digite o segundo número: "));

  const decimal = Number(prompt("Digite um número decimal: "));

  const respostas78e9 = document.getElementById('respostas78e9');

  if (respostas78e9) {
    respostas78e9.innerText = `
      . número convertido para decimal: ${numeroDecimal}
      . A soma dos números: ${num1 + num2}
      . O quadrado do nosso número decimal: ${decimal * decimal}
    `;
  }
}

//Questão 10 e 11
const questoes10e11 = () => {
  const anoNascimento = Number(prompt("Digite seu ano de nascimento: "));

  const nome11 = prompt("Digite seu primero nome: ");
  const sobrenome11 = prompt("Digite seu sobrenome: ");

  const respostas10e11 = document.getElementById('respostas10e11');

  if (respostas10e11) {
    respostas10e11.innerText = `Olá ${nome11} ${sobrenome11}, você tem ${2024 - anoNascimento} anos!`;
  }
}

//Questão 12
const questao12 = () => {
  const quantidadeNumeros = Number(prompt("Quantos números você quer salvar?"));
  const numeros: number[] = new Array();

  for (let i = 0; numeros.length < quantidadeNumeros; i++) {
    numeros.push(Number(prompt(`Digite o seu ${i + 1} número`)));
  }

  const respostas12 = document.getElementById('respostas12');

  if (respostas12) {
    respostas12.innerText = `Você quis um array de tamanho ${quantidadeNumeros} e os números do seu array são ${numeros}`  
  } 
}

//Questão 13
const questao13 = () => {
  const nomeAnimal = prompt('Digite o nome de um animal: ');

  const respostas13 = document.getElementById('respostas13');

  if (respostas13) {
    respostas13.innerText = `Você digitou o nome do animal ${nomeAnimal}`
  }
}

//Questão 14 e 15
const questao14e15 = () => {
  const nome14 = prompt('Digite seu nome: ');
  const sobrenome14 = prompt('Digite seu sobrenome: ');

  const respostas14 = document.getElementById('respostas14e15');

  if(respostas14){
    respostas14.innerText = `Seu nome invertido é ${sobrenome14} ${nome14} e o tamanho do seu nome e sobrenome é ${Number(nome14?.length) + Number(sobrenome14?.length)}`
  }
}

//Questão 16 e 17
const questao16e17 = () => {
  const numero16 = Number(prompt('Digite um número: '));

  const respostas16e17 = document.getElementById('respostas16e17');

  if(respostas16e17){
    respostas16e17.innerText = `O número digitado é ${numero16 % 2 == 0 ? 'par' : 'impar'} e ${numero16 > 0 ? 'positivo' : 'negativo'}`
  }
}

//Questão 18
const questao18 = () => {
  const num1 = Number(prompt('Digite o primeiro número: '));
  const num2 = Number(prompt('Digite o segundo número: '));

  const respostas18 = document.getElementById('respostas18');

  if(respostas18){
    respostas18.innerText = `${num1 > num2 ? `${num1} é maior que ${num2}` : `${num2} é maior que ${num1}`}`
  }
}

//Questão 19
const questao19 = () => {
  const peso = Number(prompt('Digite o seu peso: '));
  const altura = Number(prompt('Digite a sua altura: '));

  const imc = peso / (altura * altura);

  const respostas19 = document.getElementById('respostas19');

  if(respostas19){
    respostas19.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`
  }
}

//Questão 20
const questao20 = () => {
  const nome = prompt('Digite o seu nome: ');

  const respostas20 = document.getElementById('respostas20');

  if(respostas20){
    if (nome) {
      respostas20.innerHTML = `${nome?.length > 5 ? 'Seu nome tem mais que 5 caracteres!' : 'seu nome tem menos que 5 caracteres!'}`
    }
  }
}

//Questão 21
const questao21 = () => {
  const estadoCivil = prompt('Digite seu estado civil: ');

  const respostas21 = document.getElementById('respostas21');

  if(respostas21){
    respostas21.innerText = `Seu estado cívil é: ${estadoCivil}`;
  }
}

//Questão 22
const questao22 = () => {
  const base = Number(prompt('Digite a base do seu retângulo: '));
  const altura = Number(prompt('Digite a altura do seu retângulo: '));

  const respostas22 = document.getElementById('respostas22');

  if(respostas22){
    respostas22.innerText = `A área do retângulo é: ${base * altura} `;
  }
}

//Questão 23
const questao23 = () => {
  const cidade = prompt('Digite sua cidade: ');

  const respostas23 = document.getElementById('respostas23');

  if(respostas23){
    if (cidade) {
      respostas23.innerText = `A sua cidade ${cidade[0].toLowerCase() === 'r'? 'inicia com R' : 'não inicia com R'}`
    }
  }
}

//Questão 24
const questao24 = () => {
  const num1 = Number(prompt('Digite o primeiro número: '));
  const num2 = Number(prompt('Digite o segundo número: '));

  const respostas24 = document.getElementById('respostas24');

  if(respostas24){
    respostas24.innerText = `O resto da divisão dos dois números é: ${num1 % num2}`
  }
}

//Questão 25
const questao25 = () => {
  const num = Number(prompt('Digite um número decimal: '));

  const respostas25 = document.getElementById('respostas25');

  if (respostas25) {
    respostas25.innerText = `O número convertido decimal convertido para inteiro é: ${Math.round(num)}`;
  }
}

//Questão 26
const questao26 = () => {
  const num = prompt('Digite um número: ');
  let concatena;

  if (num) {
    concatena = num + 10;
  }

  const respostas26 = document.getElementById('respostas26');

  if (respostas26) {
    respostas26.innerText = `O número em string somado com 10 é igual a: ${concatena}`;
  }
}

//Questão 27
const questao27 = () => {
  const data = prompt('Digite a data completa: ');
  let convertData;

  const respostas27 = document.getElementById('respostas27');

  if (data) {
    convertData = data.split("/");

    if (respostas27) {
      respostas27.innerText = `
      Dia: ${convertData[0]}
      Mês: ${convertData[1]}
      Ano: ${convertData[2]}
      `
    }
  }
}

//Questão 28
const questao28 = () => {
  const cidade = prompt('Digite sua cidade: ');
  const estado = prompt('Digite seu estado: ');

  const respostas28 = document.getElementById('respostas28');

  if(respostas28){
    respostas28.innerText = `Você mora em ${cidade}, ${estado}`;
  }
}

//Questão 29
const questao29 = () => {
  const anoNascimento = prompt('Digite seu ano de nascimento: ');

  const respostas29 = document.getElementById('respostas29');

  if(respostas29){
    respostas29.innerText = `Bem-vindo ao nosso programa, nascido em ${anoNascimento}`;
  }
}

//Questão 30
const questao30 = () => {
  const numInteiro = prompt('Digite um número inteiro: ');
  const string = prompt('Digite um texto: ');

  let concatena;

  if (numInteiro && string) {
    concatena = numInteiro + string; 
  }

  const respostas30 = document.getElementById('respostas30');

  if(respostas30){
    respostas30.innerText = `Variáveis concatenadas: ${concatena}`;
  }
}

//Questão 31
const questao31 = () => {
  const produto = prompt('Digite o nome de um produto: ');
  const preco = prompt('Digite preço do produto: '); 

  const respostas31 = document.getElementById('respostas31');

  if(respostas31){
    respostas31.innerText = `
    Produto: ${produto} 
    Preço: ${preco}
    `;
  }
}

//Questão 32
const questao32 = () => {
  const numInteiro = Number(prompt('Digite um número inteiro: '));

  const respostas32 = document.getElementById('respostas32');

  if(respostas32){
    respostas32.innerText = `O dobro do número informado é: ${numInteiro * 2}`;
  }
}

//Questão 33
const questao33 = () => {
  const email = prompt('Digite seu endereço de email: ');

  const respostas33 = document.getElementById('respostas33');

  if(respostas33){
    respostas33.innerText = `Endereço de email ${email} cadastrado!`;
  }
}

//Questão 34
const questao34 = () => {
  const num1 = Number(prompt('Digite o primeiro número: '));
  const num2 = Number(prompt('Digite o segundo número: '));

  const respostas34 = document.getElementById('respostas34');

  if(respostas34){
    respostas34.innerText = `
    Soma: ${num1 + num2}
    Diferença: ${num1 - num2}
    Produto: ${num1 * num2}
    Quociente: ${num1 / num2}
    `;
  }
}

//Questão 35
const questao35 = () => {
  const base = Number(prompt('Digite a base do triângulo: '));
  const altura = Number(prompt('Digite a altura do triângulo: '));

  const respostas35 = document.getElementById('respostas35');

  if(respostas35){
    respostas35.innerText = `
    A área do triângulo: ${(base * altura) / 2}
    `;
  }
}

//Questão 36
const questao36 = () => {
  const raio = Number(prompt('Digite o raio da circunferência: '));

  const respostas36 = document.getElementById('respostas36');

  if(respostas36){
    respostas36.innerText = `
    Perímetro da circunferência: ${(2 * Math.PI * raio).toFixed(2)}
    `;
  }
}

//Questão 37
const questao37 = () => {
  const base = Number(prompt('Digite a base do retângulo: '));
  const altura = Number(prompt('Digite a altura do retângulo: '));

  const respostas37 = document.getElementById('respostas37');

  if(respostas37){
    respostas37.innerText = `
    Perímetro do retângulo: ${2 * (base + altura)}
    `;
  }
}

//Questão 38
const questao38 = () => {
  const num1 = Number(prompt('Digite o primero número decimal: '));
  const num2 = Number(prompt('Digite o segundo número decimal: '));
  const num3 = Number(prompt('Digite o terceiro número decimal: '));

  const respostas38 = document.getElementById('respostas38');

  if(respostas38){
    respostas38.innerText = `
    Média artimética: ${((num1 + num2 + num3) / 3).toFixed(2)}
    `;
  }
}

//Questão 39
const questao39 = () => {
  const idade = Number(prompt('Digite sua idade: '));

  const respostas39 = document.getElementById('respostas39');

  if(respostas39){
    respostas39.innerText = `
    Meses vividos: ${idade * 12}
    Dias vividos: ${idade * 365}
    `;
  }
}

//Questão 40
const questao40 = () => {
  const valor = Number(prompt('Digite o valor em reais: '));
  const cotacao = Number(prompt('Digite a cotação do dolar: '));

  const respostas40 = document.getElementById('respostas40');

  if(respostas40){
    respostas40.innerText = `O valor convertido é: ${valor * cotacao}`;
  }
}

//Questão 41
const questao41 = () => {
  const decimal = Number(prompt('Digite um número decimal: '));

  const respostas41 = document.getElementById('respostas41');

  if(respostas41){
    respostas41.innerText = `O valor convertido é: ${Math.round(decimal)}`;
  }
}

//Questão 42
const questao42 = () => {
  const num1 = Number(prompt('Primeiro número inteiro: '));
  const num2 = Number(prompt('Segundo número inteiro: '));
  const num3 = Number(prompt('Terceiro número inteiro: '));

  const respostas42 = document.getElementById('respostas42');

  if(respostas42){
    respostas42.innerText = `Resultado da operação: ${(num1 + num2) * num3}`;
  }
}

//Questão 43
const questao43 = () => {
  const celsius = Number(prompt('Digite a temperatura em celsius: '));

  const respostas43 = document.getElementById('respostas43');

  if(respostas43){
    respostas43.innerText = `Temperatura em Fahrenheit: ${(celsius * 9/5) + 32}`;
  }
}

