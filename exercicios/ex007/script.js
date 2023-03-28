
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var agora = new Date()
  var hora = agora.getHours()
 
  msg.innerHTML = `Agora são ${hora} horas.`
 function carregar() {
    if (hora >=0 && hora < 12) {
        img.src = 'manha-jpg.jpg'
        document.body.style.background = '#7979e6'
    } else if (hora >=12 && hora <= 18){
        img.src = 'tarde-1.jpg'
        document.body.style.background = '#e7885c'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#504140'
    }
 }

