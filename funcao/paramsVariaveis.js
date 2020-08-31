function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1)) // retorna valor
console.log(soma(1.1, 2.2, 3.3)) // somou todos os elementos
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c')) // resultado da soma é 0 e o abc ex: 0abc