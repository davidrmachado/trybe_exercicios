//Função que diz se o valor é um numero primo:

let n = 11;
let primo = false;

function ehPrimo(param) {
  //if para exlcuir numeros 2, 3, 5 e 7:
  if (param == 2 || param == 3 || param == 5 || param == 7) {
    primo = true;
  }

  //if para determinar se são divisíveis por 2, 3, 4 ou 7:
  if (
    (param % 2 != 0) &
    (param % 3 != 0) &
    (param % 5 != 0) &
    (param % 7 != 0)
  ) {
    primo = true;
  }

  return primo;
}

let resultado = ehPrimo(n);

console.log("O numero " + n + " é primo: " + resultado);
