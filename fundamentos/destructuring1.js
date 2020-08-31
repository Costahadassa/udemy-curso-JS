// novo recurso do ES2015

const pessoa = {
    nome: 'Cin',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i) // atribuido letras (n) e (i) para nome e idade

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)  // vai dar undefined pois eh palavras que nao foram definidas

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)