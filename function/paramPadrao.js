/**
 * Criando Parametro Padrão
 *
 * 1- Usando o operador Ou ||
 * 2- Comparando a variavel diferente de undefined
 * 3- Verificando a posição dentro do arguments
 * 4- Validando se é um numero
 */

function sum(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;

  return a + b + c;
}

console.log(sum(), sum(3), sum(1, 2, 3), sum(0, 0, 0)); // Não aceita o zero

function otherSum(a, b, c) {
  a = a != undefined ? a : 1;
  b = 1 in arguments ? b : 1;
  c = isNaN(c) ? 1 : c;

  return a + b + c;
}

console.log(otherSum(), otherSum(2), otherSum(1, 2, 3), otherSum(0, 0, 0));

// Valor padrão ecma2015
function newSum(a = 1, b = 1, c = 1) {
  return a + b + c;
}
console.log(newSum(), newSum(2), newSum(1, 2, 3), newSum(0, 0, 0));
