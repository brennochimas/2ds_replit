function dados(nome, sobrenome){
if(typeof nome === 'string' && typeof sobrenome === 'string'){
  alert('ola ' + nome +" "+ sobrenome + "!")
}else{alert('por favor insira um texto valido')}
}
dados('arthur', 'chimanski')
dados(2, 'chimanski')