// Ler título e duração de um filme em minitos. Connverter para horas e minutos.

// const prompt  = require("prompt-sync")()
// const nome = prompt("Digite o nome do filme:  ")
// const minutos = Number(prompt("Digite quantos minutos tem o filme:  "))

// const converter =Math.floor(minutos/60) 
// const resto = minutos % 60

// console.log(`O filme mencionado é o ${nome} e tem duração de ${converter} horas e ${resto} minutos`)

function filme(){
let nomeFilme = document.getElementById("filme").value
console.log(nomeFilme)
let elementoMinutos =  parseFloat(document.getElementById("minutos").value)
console.log(elementoMinutos)

let elementoResultado = document.getElementById("resultado")

const converter =Math.floor(elementoMinutos/60) 
const resto = elementoMinutos % 60

elementoResultado.innerHTML = "O filme mencionado é "+ nomeFilme +" e a duração de " +converter + " horas e " + resto +" minutos."


}