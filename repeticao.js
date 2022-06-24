// == -> verifica se os valores são iguais
// === -> verifica se os valores E OS TIPOS são iguais

// for

// let contador = VARIAVEL; contador > X = CONDIÇÃO DE REPETIÇÃO; contador++ = INCREMENTO

for(let contador = 0; contador < 2; contador++) {
    console.log("Senha incorreta. Se errar 3 vezes, o cartão será bloqueado");
}

console.log("CARTÃO BLOQUEADO");

// Switch

let alimento = "BatATA"

switch (alimento.toLowerCase()) {
    case "feijão":
        console.log("O feijão é rico em ferro e proteínas");
        break;
    
    case "batata":
        console.log("Purê de batata é muito bom");
        break;

    case "arroz":
        console.log("Arroz é um cereal rico em carboidratos");
        break;

    default:
        console.log("O alimento selecionado não é saudável")
        break;

}


// If else

if (alimento == "feijão") {
    console.log("O feijão é rico em ferro e proteínas");
} else if (alimento == "batata")
    console.log("Purê de batata é muito bom");