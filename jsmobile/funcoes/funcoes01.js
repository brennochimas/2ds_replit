/**
 *  Funções: são blocos de código que podem ser reaproveitados
 * Funções:podem ou não ter nomes
 * Funções:podem ou não ter parâmetros
 */
//CRIAR OU DELETAR FUNÇÕES//
function dizOla(nome) {
  //código
  console.log('olá ' + nome)
}
// INVOCAR/ CHAMAR FUNÇÕES
//dizOla('Brenno')
//dizOla('meu Deus Guilherme')
//dizOla('Alemao')

//adição
function somaDoisNumeros(x, y) {
  const soma = x + y
  console.log(soma)
}
somaDoisNumeros(2, 3)
somaDoisNumeros(34, 39)

//subitração
function subitraiaDoisNumeros(x, y) {
  const subtracao = x - y
  console.log(subtracao)
}
subitraiaDoisNumeros(10, 5)
subitraiaDoisNumeros(345, 23)

//multiplicação
function multiplicaDoisNumeros(x, y) {
  const multiplica = x * y
  console.log(multiplica)
}
multiplicaDoisNumeros(10, 5)
multiplicaDoisNumeros(3457, 7)

//divisão
function divideDoisNumeros(x, y) {
  const divide = x / y
  console.log(divide)
}
divideDoisNumeros(1730, 2)
divideDoisNumeros(2484, 2)