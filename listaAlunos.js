// Para cada aluno na lista de alunos:
// se o numeroAluno é 0:
//      mostrar: o numéro é ZERO
// senão se o numeroAluno é par:
//      mostrar: o numero X é par
//senão se o numeroAluno é impar:
//      mostrar: o numero X é impar

let listaAlunos = ["Aley", "Elisama", "André", "Juan", "Larissa"];

for(let numero = 0; numero < listaAlunos.length; numero++) {
    console.log(numero)
    if (numero == 0) {
        console.log("O número é ZERO")
    } else if (numero % 2 == 0) {
        console.log(`O número ${numero} é PAR`)
    } else if (numero % 2 == 1) {
        console.log(`O número ${numero} é ÍMPAR`)
    }
}