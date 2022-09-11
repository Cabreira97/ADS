// //Ler o valor de um jantar. Calcular a  taxa do garçom (10%) e total da conta.
// const prompt = require("prompt-sync")()

// const valorJanta = Number(prompt("Digite o valor do jantar: "))
// console.log("Obs: Aceitamos apenas valores abaixo de 100% da conta.")

// const taxaGarcom = Number(prompt("Digite uma porcentagem para taxa do: "))

// const porcentagem = (taxaGarcom/100) * valorJanta

// const total = valorJanta + porcentagem

// console.log(`O valor do jantar sem a taxa do garçom é de R$ ${valorJanta}  a % da taxa do garçom foi ${taxaGarcom}, com isso, o valor total da conta foi ${total} reais.`)


function Chutar(){
 let entradaValor = parseFloat(document.getElementById("valor").value)
console.log(entradaValor)
 
  let elementoResultado = document.getElementById("resultado")

  const porcentagem = entradaValor * 0.1
  console.log(porcentagem)

  const valorTotal =entradaValor + porcentagem
  console.log(valorTotal)

  elementoResultado.innerHTML= "O valor do jantar sem a taxa do garçom é de R$  " + entradaValor + " mais o adicional de 10% da porcentagem da gorgeta, o valor total da conta deu R$ " + valorTotal

}