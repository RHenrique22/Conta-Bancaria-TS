class Clientes {
    private _clientes: Array<Cliente>;

    constructor () {
        this._clientes = new Array<Cliente>();
    }

    inserir (cliente: Cliente): void {
        this._clientes.push(cliente);
    }

    remover (cpf: string): void {
        const referenceClient = this.pesquisar(cpf);

        if (referenceClient) {
            const inidiceClient = this._clientes.indexOf(referenceClient);
            if (inidiceClient > -1) {
                this._clientes.splice(inidiceClient, 1);
            }
        }
        else {
            console.log(`Cliente de cpf: ${cpf}, não encontrado`);
        }
    }

    listar (): ReadonlyArray<Cliente> {
        return this._clientes;
    }

    pesquisar (cpf: string): Cliente {
        return this._clientes.find(
            cliente => cliente.cpf === cpf
        );
    }

}