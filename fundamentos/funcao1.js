// funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)  // a + b foi atribuido nessa linha sendo 2+3 = 5
imprimirSoma(2) // posso considerar apenas o primeiro nr
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // só eh considerado os dois primeiros nrs


 // funcao com retorno
 function soma(a, b = 1) { //o b foi atribuicom com valor 1
    return a + b // nessa linha é o retorno da atribuicao na primeira chamada
 }

 console.log(soma(2, 3)) // aqui o valor é 3 b=3
 console.log(soma(2)) // aqui da Not a Number pq nao tem atribuicao de valor aeh2=0
 console.log(soma()) // da NaN pq nao tem valor a ser impresso