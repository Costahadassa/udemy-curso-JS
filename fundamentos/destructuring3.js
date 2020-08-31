function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} // O método Math.floor() arredonda um número para baixo para o número 
//inteiro mais próximo, e retorna o resultado.
//Exemplo: O valor 2.64 arrendondando (floor) = 2


const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))
console.log(rand())