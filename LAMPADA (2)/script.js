const btnAlternar = document.getElementById('btn-alternar');
const imgLampada = document.getElementById('lampada');
const baseUrl = "https://8acdabe9-088f-43a7-89b6-365a43a6ffa3-00-33pm4rz4pwykd.kirk.replit.dev/"
btnAlternar.addEventListener('click', function() {

  if (imgLampada.src == baseUrl + "lampada0.png") {
    imgLampada.src ="lampada2.png"
  } else {
    imgLampada.src = "lampada0.png"

  }
})

