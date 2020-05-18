/**
 * Essa função mostra como o JS pode trabalhar com paramentros
 * dentro de suas funções. Mesmo uma função sem parametros declarados
 * em seu corpo, pode receber quantos parametros forem passados, e
 * podem ser recuperados pelo atributo @arguments
 */
function soma() {
  let soma = 0;
  for (i in arguments) {
    soma += arguments[i];
  }
  return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));
console.log(soma(1.1, 2.2, "Algo"));
console.log(soma("Algo", "Que", "Criamos"));
