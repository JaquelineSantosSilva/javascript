function contar() {
    let ini = window.document.getElementById('numinicio')
    let fim = window.document.getElementById('numfim')
    let contade = window.document.getElementById('contarde')
    let res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
        
    } else {
        res.innerHTML= 'Contando:   <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let cont = Number(contade.value)
        if (cont <= 0){
            window.alert(' contador inválido! considerando o contardor como  1')
            cont = 1
        }
        if (i < f) {
            //contagem crecsente
           for( let c = i; c <= f; c += cont){
             res.innerHTML += `${c} \u{1F449}`
            } 
        } else {
            //contagem decrescente
            for( let c = i; c >= f; c -= cont) {
                res.innerHTML += `${c} \u{1F449}`
               } 
            }
      }
}