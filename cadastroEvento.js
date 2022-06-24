// Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será 
// permitido por data inválida.
// Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
// Listar participantes e palestrantes por evento.
// Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o 
// cadastro não será permitido por ter excedido o limite.

prompt = require("prompt-sync")();
let dataAtual = new Date();
let ano = 2022
let mes = 07
let dia = 10
console.log ("Bem-vindo, cadastre-se aqui");


// idade

const idadeMinima = 18
let idadeCliente = parseInt(prompt("Insira sua idade: "))

console.log("Sua idade é " + idadeCliente)

if(idadeCliente < idadeMinima) {
    console.log("Idade inferior ao permitido");
} else{
    console.log("idade confirmada!");
}

// data
let dataEvento = new Date (ano, mes, dia)


console.log(dataAtual);

if(dataEvento < dataAtual) {
    console.log("Sinto muito! Evento encerrado. Fique atento à nodas datas");
} else{
    console.log("Siga adiante para finalizar");
}

// numero de inscritos permitidos
let listaInscritos = [75];

console.log(`Número de inscritos: ${listaInscritos[0]}`);

while (listaInscritos < 90) {
    console.log("Cadastro finalizado com sucesso!")
    listaInscritos = listaInscritos + 1
}

