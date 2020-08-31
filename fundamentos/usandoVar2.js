var numeroo = 1
{
    var numero = 2
    console.log('dentro =', numero) // var é possivel imprimir tanto dentro do escopo   
                                    // como fora 
}
console.log('fora=', numero)  ////como o let encherga o bloco como um escopo, 
//então um não irá influenciar o outro, diferente

//EXEMPLO A BAIXO

var numero = 1   //como o JS só tem dois escopos (dentro de função e fora de função(global))
{
    var numero = 2 //neste exemplo temos uma variável global, por isso quando reescrevemos a var numero = 2
    console.log('Dentro = ', numero) 
}                   //esse valor substitui o primeiro valor, então ela imprimirá 2 seja dentro ou fora do bloco.
console.log('Fora = ', numero)

//EXEMPLO^^

var ultimoFilme = filme[5];