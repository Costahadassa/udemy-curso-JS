function comErro() {
    throw "Sou uma string" // O "e" normalmente representa o erro que foi lançado, 
                            //mas pode ser qualquer coisa que foi passado no throw...
}
 
try {
    comErro()
} catch(e) {
    console.log(e)
}

function comErro() {
    throw 123
}
 
try {
    comErro()
} catch(e) {
    console.log(e)
}

function comErro() {
    throw new Error("O erro ocorreu pq...")
}
 
try {
    comErro()
} catch(e) {
    console.log(e)
}