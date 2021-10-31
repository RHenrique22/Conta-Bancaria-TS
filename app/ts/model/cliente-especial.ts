class ClienteEspecial extends Cliente {
    private _dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string, conta: Conta) {
        super(nome, cpf, conta);
        this._dependentes = new Array<Cliente>();
    }

    inserirDependente (dependente: Cliente): void {
        this._dependentes.push(dependente);
    }

    removerDependente (cpf: string): void {
        const dependenteRemove = this.buscarDependente(cpf);
        if (dependenteRemove) {
            const indiceDependente = this._dependentes.indexOf(dependenteRemove);
            if (indiceDependente > -1) {
                this._dependentes.splice(indiceDependente, 1);
            }
            else {
                console.log(`O dependente de cpf: ${cpf}, não foi encontrado `);
            }
        }
    }

    buscarDependente (cpf: string): Cliente {
        return this._dependentes.find(
            dependente => dependente.cpf === cpf
        );
    }

    toString1 (): string {
        let output: string;

        output = `Nome: ${this.nome}\nCPF: ${this.cpf}
Conta: {
    ${this.conta}
},\n`
        output += `Dependentes: {`
        for (let dependente of this._dependentes) {
            output += `\n${dependente.toString()}`
        }

        output += `}`;

        return output;
    }
}