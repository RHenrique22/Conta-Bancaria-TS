let clienteController = new ClienteController();

const c2 = new Conta('1', 100);
const p2 = new Poupanca('2', 100);
const cb2 = new ContaBonificada('3', 0);

const cli1 = new Cliente('joao', '123', c2);
const cli2 = new Cliente('maria', '124', p2);
const cli3 = new Cliente("josé", "234", cb2);

const clientes = new Clientes();
clientes.inserir(cli1);
clientes.inserir(cli2);
clientes.inserir(cli3);

const cliEsp = new ClienteEspecial("Ana", "456", new Conta("25", 100.25));
cliEsp.inserirDependente(cli1);
cliEsp.inserirDependente(cli2);
cliEsp.inserirDependente(cli3);

console.log("=====================")
console.log("Cliente Especial:")
console.log(cliEsp.toString1());
console.log("=====================")

console.log("Antes da remoção:");

clientes.listar().forEach(
    cliente => {
        console.log(cliente.toString());
    }
);

console.log("=====================")

clientes.remover("123");

console.log("Após a remoção:")

clientes.listar().forEach(
    cliente => {
        console.log(cliente.toString());
    }
);

console.log("=====================")

console.log("Resultado da pesquisa:")
const cliente = clientes.pesquisar("124");
console.log(cliente.nome);