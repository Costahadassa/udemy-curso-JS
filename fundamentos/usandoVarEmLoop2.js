const funcs = []

for (var i = 0; i < 10; i++) {  //o var não respeita o escopo de bloco
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()  //o resultado sera 10 pq var nao repeita escopo/bloco