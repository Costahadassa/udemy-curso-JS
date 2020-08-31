{ 
    { 
        { 
            { 
    var sera = 'será?' 
    console.log (sera)  // é possivel abrir varios escopo {{}}
            }           // a variavel aparece dentro e fora do escopo
                        // pq nao foi atribuida funcao para a variavel
                         
        } 
    } 
}

console.log(sera)

function teste() {  //criado uma funcao dentro do escopo {}
    var local = 123
    console.log(local)
}
teste()
console.log(local) // variavel fora do escopo nao é visivel 

//CUIDADO exemplos de variaveis que é bom evitar pois 
// é objeto global/window

// (exemplos a baixo)
//window.a    // (a) é um objeto global, se caso eu atribuir uma funcao 
//123           // irei subescrevelo
//var a = 'teste'
//window.a
//"teste"