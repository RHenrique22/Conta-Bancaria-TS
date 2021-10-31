class Cliente {
    private _nome: string;
    private _cpf: string;
    private _conta: Conta;

    constructor (nome: string, cpf: string, conta: Conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get nome (): string {
        return this._nome;
    }

    set nome (newName: string) {
        this._nome = newName;
    }

    get cpf (): string {
        return this._cpf;
    }

    set cpf (newCpf: string) {
        this._cpf = newCpf;
    }

    get conta (): Conta {
        return this._conta;
    }

    set conta (newConta: Conta) {
        this._conta = newConta;
    }

    toString (): string {
        let output: string;

        output = `Nome: ${this.nome}\nCPF: ${this.cpf}\nConta: {
    ${this.conta}
}`

        return output;
    }
    
}