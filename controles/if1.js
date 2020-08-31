function soBoaNoticia(nota) {
    if(nota >=7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function sForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade...' + valor)
    }
}
  //null,0,undefined,' ', NaN, false, esses são os únicos
    //Só existem, alguns valores que retornam false nativamente da linguagem.

sForVerdadeEuFalo
sForVerdadeEuFalo()
sForVerdadeEuFalo(null)
sForVerdadeEuFalo(undefined)
sForVerdadeEuFalo(NaN)
sForVerdadeEuFalo('')  
sForVerdadeEuFalo(0)
sForVerdadeEuFalo(-1)
sForVerdadeEuFalo(' ')
sForVerdadeEuFalo('?')
sForVerdadeEuFalo([]) //O que acontece no caso da array é o seguinte, por mais que ela esteja vazia, 
//ela ainda existe, ainda ocupa espaço na memória.
sForVerdadeEuFalo([1, 2])