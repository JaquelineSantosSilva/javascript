function verificaQuadradoPerfeito(n) {
  let raizQuadrada = parseInt(Math.sqrt(n))
  return (raizQuadrada * raizQuadrada == n)
}

function verificaFibonacci(n) {
  let resultado = (verificaQuadradoPerfeito(5 * n * n + 4) || verificaQuadradoPerfeito(5 * n * n - 4))
  return `O numero informado ${resultado ? '"pertence"' : '"não pertence"'} a sequencia fibonacci`
}