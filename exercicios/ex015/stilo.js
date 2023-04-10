
let num = window.document.getElementById('numero')
let analise = window.document.getElementById('analizador')
let res = window.document.getElementById('res')
let numero = []

function enumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function analist(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
 
function adicionar(){
    if (enumero(num.value) && !analist(num.value, numero)) {
        numero.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        analise.appendChild(item)
        res.innerHTML = ""
    }else {
        window.alert('Valor invalido, ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (numero.length == 0) {
        window.alert("Adicione valores antes de finalizar!")
    } else {
        let tot = numero.length
        let maior = numero[0]
        let menor = numero[0]
        let soma = 0
        let media = 0
        for(let pos in numero) {
            soma += numero[pos]
            if(numero[pos] > maior)
            maior = numero [pos]
            if(numero[pos] < menor)
            menor = numero[pos]
        }
        media = soma / tot
        res.innerHTML = ""
        res.innerHTML += `<p> Ao todo temos ${tot} números adicionados a lista. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> Somando todos os números o resultado é ${soma}. </p>`
        res.innerHTML += `<p>A média entre os valores adicionados a lista é de ${media}. </p>`
    }
}
