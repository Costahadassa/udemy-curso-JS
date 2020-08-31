// par nome/valor
const saudacao ='opa' //contexto lexico 1

function exec() {
    const saudacao = 'falaaa' // contexto lexico 2
    return saudacao  // O retorno dessa função é a própria soma, ou seja, o retorno é aquilo que o usuário 
     //dessa função deseja receber após ela ser executada.
}

//objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        rua: 'martins fontes',
        numero: 390
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)