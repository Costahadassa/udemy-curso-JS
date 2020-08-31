let valor // nao inicializada e nao atribuida
console.log(valor)

valor = null // ausencia de valor
console.log(valor)

// console.log(valor.toString()) // erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir indefinido, melhor deletar se nec
 // delete produto.preco
 console.log(produto)

 produto.preco = null // nulo de preco. sem preco atribuido
 console.log(!!produto.preco)
 console.log(produto)