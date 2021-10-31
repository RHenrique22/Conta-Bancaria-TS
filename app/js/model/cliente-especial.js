class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._dependentes = new Array();
    }
    inserirDependente(dependente) {
        this._dependentes.push(dependente);
    }
    removerDependente(cpf) {
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
    buscarDependente(cpf) {
        return this._dependentes.find(dependente => dependente.cpf === cpf);
    }
    toString1() {
        let output;
        output = `Nome: ${this.nome}\nCPF: ${this.cpf}
Conta: {
    ${this.conta}
},\n`;
        output += `Dependentes: {`;
        for (let dependente of this._dependentes) {
            output += `\n${dependente.toString()}`;
        }
        output += `}`;
        return output;
    }
}
