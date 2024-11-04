// FUNÇOES COM RETORNO
// SAO FUÇÕES QUE RETORNAM UM VALOR
// PROCESSADO
// PARA USO POSTERIOR 

// const nome = 'arthur'

// function retornaDados() {
//   return nome.toUpperCase()
//   // A PARTIR DESSA LINHA  NAO  EXECUTADO MAIS NADA 
//   console.log(ola)
// }  
// const dados = retornaDados()
// console.log(dados)


function retornaDados(nome, idade, cpf) {
  return ' ola ' + nome + ' sua idade é ' + idade + ' seu cpf é ' + cpf


}
const dados = retornaDados('Brenno', 16, 777777777)
console.log(dados)