function somaDosPares(param1, param2, param3, param4, param5){
        let pares = []
        
        for (var i = 1; i <= 5; i = i+ 1) {
            if(eval(`param${i}`) % 2 == 0){
                pares.push(eval(`param${i}`))
            }
        }
        return pares.reduce((acc, next) => acc + next, 0)
}
console.log(somaDosPares(44, 50, 13, 18, 20))