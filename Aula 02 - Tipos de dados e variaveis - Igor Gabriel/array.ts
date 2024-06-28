//1º Questão
const numeros: number[] = [];

//2º Questão
for (let i = 1; i < 5 ; i++) {
    numeros.push(i);
}

//3º Questão
console.log(`O segundo elemento do array é ${numeros[1]}`);

//4º Questão
numeros[2] = 10;

//5º Questão
numeros.pop();

//6º Questão
console.log(numeros.length);

//7º Questão
const frutas: string[] = ['Maça', 'Banana', 'Laranja'];

//8º Questão
console.log(`O primeiro elemento do array de frutas é ${frutas[0]}`);

//9º Questão
frutas.push('Uva');

//10º Questão
type aluno = {
    nome: String,
    idade: Number
}

const igor: aluno = {
    nome: 'Igor',
    idade: 23
}

const alunos: aluno[] = [igor];

//11º Questão
console.log(`O nome do primeiro aluno da lista de alunos é ${alunos[0].nome}`);

//12º Questão
const karla: aluno = {
    nome: 'Karla',
    idade: 25
}

const leticia: aluno = {
    nome: 'Letícia',
    idade: 13
}

const estefani: aluno = {
    nome: 'Estefani',
    idade: 14
}

alunos.push(karla, leticia, estefani);

console.log(alunos);

//13º Questão
const produtos: string[] = ['Creme dental', 'Maça', 'Biscoito', 'Pão', 'Mel', 'Feijão', 'Salsicha', 'Café', 'Açucar', 'Arroz'];

for (let i = 0; i < produtos.length; i++) {
    if (i % 2 == 0) {
        console.log(produtos[i]);
    }
}