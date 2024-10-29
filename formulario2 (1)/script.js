// selecionar elementoshtml
const color = document.querySelector("#color");
const range = document.querySelector("#range");
const box = document.querySelector(".box");
const valorCor = document.querySelector(".valor-cor");
const linha = document.querySelector(".linha");

//alert(color.value) //valor dentro do input color



// criar eventos de manipulação
range.value = 0;
// evento de input
range.addEventListener('input', function() {
  box.style.borderRadius = range.value + 'px';
})

color.addEventListener('input', function() {
  box.style.backgroundColor = color.value;
  valorCor.innerHTML = color.value;
  valorCor.style.color = "white"
})