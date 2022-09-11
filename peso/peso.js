const prompt  = require("prompt-sync")()

const peso = Number(prompt("Em kg informe o peso da ração comprada:"))
const converterPeso = peso * 1000
console.log(`O valor inserido em Kg foi convertido para gramos, ou seja, ${converterPeso}g.`)
const gato = Number(prompt("Digite quantos gatos vão consumir a ração: "))

const dias  = Math.floor(converterPeso / gato)
const resto = converterPeso % gato


console.log(`A ração dura ${dias} dias  e ainda  sobra ${resto}g.`)