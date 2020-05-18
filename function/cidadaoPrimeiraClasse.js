// Função em JS é First-Class Object (Citizens)
// Higher-order function

//Criar função de forma literal
function funOne() {}

// Armazenar em uma variavel
const funTwo = function () {};

// Armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
  funOne,
  funTwo,
];
// Usando a função do array
console.log(array[0](2, 3));

// Armazenar em um atributo de objeto
const obj = {};
obj.emitirSom = function () {
  return console.log("Emitindo som..");
};
console.log(obj.emitirSom());

// Passar função por parametro
function run(fun) {
  fun();
}

run(function () {
  return console.log("Executando a função run ");
});

// Uma função pode retornar/conter uma função
function sum(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}
sum(2, 5)(5)
