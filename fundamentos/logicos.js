function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unario

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))  // Percebe que eu usei o ! (Operador de Negação) na palavra true,
console.log(compras(true, false)) //significa que eu inverti, e qual é o inverso de true ?
console.log(compras(false, true)) // Exatamente, o inverso de true é false
console.log(compras(false, false)) //É bem simples, o Operador de Negação ele apenas inverte.