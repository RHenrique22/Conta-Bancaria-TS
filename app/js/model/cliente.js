class Cliente {
    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    get nome() {
        return this._nome;
    }
    set nome(newName) {
        this._nome = newName;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(newCpf) {
        this._cpf = newCpf;
    }
    get conta() {
        return this._conta;
    }
    set conta(newConta) {
        this._conta = newConta;
    }
    toString() {
        let output;
        output = `Nome: ${this.nome}\nCPF: ${this.cpf}\nConta: {
    ${this.conta}
}`;
        return output;
    }
}
