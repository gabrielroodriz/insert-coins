/**
 * Apresentando que paramentros são opcionais dentro do JS
 * podendo enviar os necessários, mais do que o necessário, e as vezes
 * nenhum.
 *
 * O exemplo abaixo ilustra claramente cada uma das situações
 */
function area(l, a) {
  const area = l * a;
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m²`);
  } else {
    return area;
  }
}
console.log(area(2, 60)); // 120m²
console.log(area(2)); // NaN
console.log(area()); //NaN
console.log(area(2, 6, 8, 10)); // 8
console.log(area(2, 6)); // 12
