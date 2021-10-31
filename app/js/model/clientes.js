class Clientes {
    constructor() {
        this._clientes = new Array();
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    remover(cpf) {
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
    listar() {
        return this._clientes;
    }
    pesquisar(cpf) {
        return this._clientes.find(cliente => cliente.cpf === cpf);
    }
}
