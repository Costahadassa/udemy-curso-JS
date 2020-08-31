const nums = [1, 2, 3, 4, 5, 6, 7,]

for (x in nums) {
    if (x == 5) {
        break // é quebrar o looping, ou seja parar ate o numero 5
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}
 
externo: for (a in nums) {  // nao usar esse exemplo de codigos
    for (b in nums) {
       if(a == 2 && b == 3) break externo
       console.log(`Par = ${a},${b}`)
    }
}