
    const prompt = require('prompt-sync')();
    //Modelo atributos e funções para criação de um objeto
    class Cliente {
        nome; //Atributo
        idade;
        cpf;
        agencia;

    }
//Objeto que possui as informaões de classe de forma individual
let cliente = new Cliente();


cliente.nome = prompt("Digite o nome do cliente: ");
cliente.idade = prompt("Digite sua idade: ");
cliente.cpf = prompt("Digite seu CPF: ");
cliente.agencia = prompt("Digite sua agência: ");

console.log(cliente);