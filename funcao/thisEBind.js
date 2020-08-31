const pessoa = {
    saudacao:'Bom dia!',
    falar() {
        console.log(this.saudacao) //this é o atributo do objeto, nao da pra chamar sem o this
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa) // bind amarra o objeto
falarDePessoa
