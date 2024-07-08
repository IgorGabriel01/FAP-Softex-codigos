//1º Questão
const pessoa = {
    nome: 'Karla',
    idade: 25,
    endereco: 'Rua do Jasmim'
}

//2º Questão
console.log(`O nome da pessoa é ${pessoa.nome}`);

//3º Questão
const pessoaProfissao = {
    ...pessoa,
    profissao: 'Professora'
}

console.log(`${pessoaProfissao.nome} trabalha como ${pessoaProfissao.profissao}`)

//4º Questão
pessoa.idade = 24;

//5º Questão
const animal = {
    nome: 'Amora',
    raca: 'Vira-lata',
    cor: 'Marrom'
}

//6º Questão
type livro = {
    titulo?: string,
    autor: string,
    ano: number
}

const manga: livro = {
    titulo: 'Jujutsu Kaisen',
    autor: 'Gege Akutami',
    ano: 2023
}

//7º Questão
console.log(`O autor do livro ${manga.titulo} é o(a) ${manga.autor}!`);

//8º Questão
manga.ano = 2024;

//9º Questão
delete manga.titulo;

console.log(manga);

//10º Questão
const carro = {
    marca: 'Jeep',
    modelo: 'Gladiator',
    ano: 2022
}

//11º Questão
const newCarro = {
    ...carro,
    nome: undefined
}

console.log(`
Nome: ${newCarro.nome}
Marca: ${newCarro.marca}
Modelo: ${newCarro.modelo}
Ano: ${newCarro.ano}
`);