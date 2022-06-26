// se o peso da peça for maior que 100g
//      SIM: podemos cadastrar
//      NÃO: mostrar mensagem na tela com o erro

// se o numero de peças for maior ou igual a 10
//      SIM: impossivel cadastrar, limite de peças excedidos
//      NAO: podemos seguir com o cadastro

// se o nome da peça tiver menos de 3 caracteres:
//      SIM: informar que o nome é inadequado
//      NÃO: nome adequado
prompt = require("prompt-sync")();
let pesoPeca = parseInt(prompt("Insira o peso da peça em gramas: "))
let numeroDePecas = parseInt(prompt("Insira o número de peças para cadastro: "))
let nomePeca = parseInt(prompt("Insira o nome da peça: "))

// peso
if (pesoPeca < 100) {
    console.log("Pode seguir com o cadastro")

} else {
    console.log("ERRO: limite de peso excedido")
}

// quantidade
if (numeroDePecas >= 10) {
    console.log("ERRO: limite de peças excedido")
} else {
    console.log("Pode seguir com o cadastro")
}

// nome
if (nomePeca.lenght < 3) {
    console.log("Nome inválido")
} else {
    console.log("Nome adequado. Cadastro finalizado")
}
