class ClienteController {
    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputNumero: HTMLInputElement;
    private inputSaldo: HTMLInputElement;
    private clientes: Clientes;

    constructor () {
        this.inputNome = <HTMLInputElement>document.querySelector("#nome");
        this.inputCpf = <HTMLInputElement>document.querySelector("#cpf");
        this.inputNumero = <HTMLInputElement>document.querySelector("#contaC");
        this.inputSaldo = <HTMLInputElement>document.querySelector("#saldoC");
        this.clientes = new Clientes();
    }

    inserir (evento: Event): void {
        evento.preventDefault();
        if (this.clientes.pesquisar(this.inputCpf.value) === undefined) {
            let novoCliente = new Cliente (
                this.inputNome.value,
                this.inputCpf.value,
                new Conta (
                    this.inputNumero.value,
                    parseFloat(this.inputSaldo.value)
                )
            );
            this.clientes.inserir(novoCliente);
            this.inserirClienteHTML(novoCliente);
        }
        else {
            alert("CPF já cadastrado a uma conta");
        }
    }

    inserirClienteHTML (cliente: Cliente): void {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente \n' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
        );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}