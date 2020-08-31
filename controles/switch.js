// Switch Case. A instrução switch é usada para executar diferentes ações com base em diferentes condições. 
//Use a instrução switch case para selecionar um dos muitos blocos de código a serem executados.

//O comando break encerra o loop atual, switch , ou o loop que foi informado no label 
//e transfere o controle da execução do programa para o comando seguinte.


const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { // switch é para multiplas expressoes
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
        case 6: case 5: case 4:
            break
        console.log('Recuperacao')   
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')   
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)