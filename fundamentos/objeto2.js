console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class produto {}
console.log(typeof produto)

//EXEMPLO
 //// A função define a estrutura do objeto gerado com o new

function Funcionario(nome, cargo, salario) {
    this.nome = nome
    this.cargo = cargo
    this.salario = salario
}
 
const funcionario1 = new Funcionario('Ana Silva' , 'Analista de TI', 8400)
const funcionario2 = new Funcionario('Pedro Mesquita' , 'Gerente', 15600)
const funcionario3 = new Funcionario('Rafael Souza' , 'Contador', 10512.50)