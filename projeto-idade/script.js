function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var forano = window.document.getElementById('ano')
    var resulta =window.document.getElementById('resulta')
    var forsex = window.document.getElementsByName('sex')
    var idade = ano - Number(forano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (forano.value.length == 0 || Number(forano.value) > ano) {
        window.alert('[ERRO] Verifique os dados, e tente novamente.')}
    if (forsex[0].checked) {
        genero = 'Homem'
         if (idade >=0 && idade < 10) {
            img.setAttribute('src', 'foto-menino.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', 'foto-homem-jovem.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'foto-homem-adulto.jpg')
        } else {
            img.setAttribute('src', 'foto-homem-idoso.jpg')
        }
    } else if (forsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade < 10) {
            img.setAttribute('src', 'foto-menina.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', 'foto-mulher-jovem.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'foto-mulher-adulta.jpg')
        } else {
            img.setAttribute('src', 'foto-mulher-idosa.jpg')
        }
    }
    resulta.style.textAlign = 'center'
    resulta.innerHTML = `Identificado, ${genero} com ${idade} anos.`
    resulta.appendChild(img)
    img.style.borderRadius = '50%'
    img.style.paddingTop = '10px'
    

    






























    }
    
   

    
























