const valores = [7.7, 8.9, 6.3, 9.2] // cada casa de nr é contado a partir do 0
console.log(valores[0], valores[3])
console.log(valores[4]) // casa 4 nao existia e foi add

valores[4] = 10 // casa 4 add e numerado como 10
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste') // id é objeto, array considerado objeto
console.log(valores)

console.log(valores.pop()) // pop retira valores
delete valores[0] // para deletar basta selecionar qual casa ex:[0]
console.log(valores)

console.log(typeof valores)