const funcs = []

for (let i = 0; i < 10; i++) { //let tem memoria e imprimi individualmente seu valor
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() // os () no final é pra chamar a função anônima
funcs[6]()
funcs[8]()