class contaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, tipoConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.tipoConta = tipoConta;
    }
    
    contaPoupanca() {
        let taxaPoupança = 0.015;
        return this.salario * (1 - taxaPoupança);
    }
    
    contaCorrente() {
        let taxaCorrente = 0.036;
        return this.salario * (1 - taxaCorrente);
    }
    
    contaEstudante() {
        let taxaEstudante = 0.012;
        return this.salario * (1 - taxaEstudante);
    }
}

let conta1 = new contaBancaria("Aluna 1", 20, 1000, "Feminino", "Agencia 1", "Conta 1", "Poupança");

console.log("Nome:", conta1.nome);
console.log("Idade:", conta1.idade);
console.log("Sexo:", conta1.sexo);
console.log("Agência:", conta1.agencia);
console.log("Conta:", conta1.conta);
console.log("Tipo de Conta:", conta1.tipoConta);
console.log("Novo salário com desconto:", conta1.contaPoupanca());