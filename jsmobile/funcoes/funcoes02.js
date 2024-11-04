//declaração ou criação 
function soma(n1, n2) {
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    const res = n1 + n2;
    alert('0 resultado foi:' + res)
  } else {
    alert('Por Favor insira um número válido')
  }
}
// // INVOCAÇÃO OU CHAMAR 
// soma("maçã", 3)
// soma(5,'20')
// soma(-3,false)
// soma(5,5)


// function soma(nome, altura) {
//   if (typeof nome === 'string' && typeof altura === 'number') {

//     alert(" ola " + nome + " sua altura é: " + altura);
//   } else {
//     alert('por favor insira um texto válido')
//   }
// }
// soma("arthur", 1.80)
// soma(20, 1.80)


function dados(n) {
  if (typeof n === 'number'){
    
  if (n % 2 === 0 ) {
    alert(' O numero ' + n + ' é par')
  }else{ alert('O numero ' + n + ' é impar')}
    }else { alert( 'por favor insira um número válido')}
}
dados(126)
dados(7)
dados('morango')

   