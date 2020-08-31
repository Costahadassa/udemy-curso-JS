const nome = 'Cintia'
const concatenacao = 'Oi ' + nome + '!'
const template = `
    Oi 
    ${nome}!`
console.log(concatenacao, template)

//expressoes...
console.log(`1+1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`) 