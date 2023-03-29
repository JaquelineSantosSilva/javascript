function contar() {
    let ini = window.document.getElementById('numinicio')
    let fim = window.document.getElementById('numfim')
    let contade = window.document.getElementById('contarde')
    let res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML= 'Contando'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let cont = Number(contade.value)
       for( let c = i; c <= f; c += cont){
        res.innerHTML += `${c}`
       }
    }
        
   


}