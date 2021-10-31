class ClienteController {
    constructor() {
        this.inputNome = document.querySelector("#nome");
        this.inputCpf = document.querySelector("#cpf");
        this.inputNumero = document.querySelector("#contaC");
        this.inputSaldo = document.querySelector("#saldoC");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        if (this.clientes.pesquisar(this.inputCpf.value) === undefined) {
            let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, new Conta(this.inputNumero.value, parseFloat(this.inputSaldo.value)));
            this.clientes.inserir(novoCliente);
            this.inserirClienteHTML(novoCliente);
        }
        else {
            alert("CPF já cadastrado a uma conta");
        }
    }
    inserirClienteHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente \n' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
