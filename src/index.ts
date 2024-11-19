const prompt = require('prompt-sync') ()

function showFullName(nome: string, sobreNome: string) {
    return `${nome} ${sobreNome}`
}

console.log(showFullName('Leonardo', 'Vergani'))


function somar(valueA: number, valueB: number) {
    return `${valueA} + ${valueB} = ${valueA + valueB}`
}

const valueA: string = prompt("Digite o valor do A: ")
const valueB: string = prompt("Digite o valor do B: ")

console.log(somar(parseInt(valueA), parseInt(valueB)))
