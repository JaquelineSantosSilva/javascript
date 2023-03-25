var idade = 12
console.log(`Voce tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não Vota')
} else  if ( idade < 16 || idade  > 65) {
    console.log('Voto opcional')
   } else {
    console.log ('Voto obrigatorio')
   }
