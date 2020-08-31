//armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {  //é possivel criar uma const com uma variavel ex; (imprimirSoma)
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma funcao arrow em uma variavel
const soma = (a, b) => { // ( =>) este simbolo é uma arrow function. substitui function
    return a + b
}

//exemplo
const somar = (a, b) => a + b
const resultado = somar(2, 3)
console.log(resultado)
//exemplo

console.log(soma(2, 3))

//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2('legal!!')