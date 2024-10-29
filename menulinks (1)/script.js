//selecionar com queryselector()
const vermelho = document.querySelector('.vermelho')
const verde = document.querySelector('.verde')
const azul = document.querySelector('.azul')
const amarelo = document.querySelector('.amarelo')
const conteudo = document.querySelector('.conteudo')
const bigText = document.querySelector('.big-text')

//alert(vermelho)

vermelho.addEventListener('click', function() {
  conteudo.style.backgroundColor = 'red'
  bigText.style.color = '#fff'
})

verde.addEventListener('click', function() {
  conteudo.style.backgroundColor = 'green'
  bigText.style.color = '#fff'
})

azul.addEventListener('click', function() {
  conteudo.style.backgroundColor = 'blue'
  bigText.style.color = '#fff'
})

amarelo.addEventListener('click', function() {
  conteudo.style.backgroundColor = 'yellow'
  bigText.style.color = '#000'
})