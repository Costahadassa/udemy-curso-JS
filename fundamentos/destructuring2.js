const [a] = [10] // valor atribuido 10
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // pulou o n2 e n4
console.log(n1, n3, n5, n6) // n5 esta fora do array isso eh igual a undefined

const [, [, nota]] = [[, 8,8], [9, 6, 8]]
console.log(nota) 