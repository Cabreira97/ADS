// //1º Ler o nome e idade de um aluno. Exiba o ano de nascimento:
// //Dados de exemplo para entrada Nome: Joaquim  e idade 20 anos

// const prompt  = require("prompt-sync")()

// const nome = prompt("Digite o nome do Aluno:  ")
// const idade = Number(prompt("Digite a idade do aluno:  "))

// const nascimento = 2022 -(idade + 1)
// console.log(`O aluno ${nome} tem ${idade} anos e nasceu em ${nascimento}.`)

function nascimento() {
  let elementoNome = document.getElementById("nome").value
  let elementoIdade = parseInt(document.getElementById("idade").value)
  console.log(elementoIdade, elementoNome)

  let elementoResultado = document.getElementById("resultado")

  const nascimento = 2022 - (elementoIdade+ 1)

  elementoResultado.innerHTML = " O aluno "+ elementoNome + " tem "+elementoIdade +" e nasceu em " + nascimento+"."

}