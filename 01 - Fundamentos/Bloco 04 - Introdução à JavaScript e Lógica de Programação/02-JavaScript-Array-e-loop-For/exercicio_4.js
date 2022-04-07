let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let number = 0;

//Exercício 3 - Calcule e imprima a média aritmética dos valores contidos no array e avalia se o resultado é maior ou menor que 20.
for (let i = 0; i < numbers.length; i++) {
    number = number + numbers[i]
}
number = number / numbers.length;

console.log('A média aritimética dos números é ' + number);
if (number< 20) {
    console.log('Esse valor é menor que 20');
}   else {
    console.log('Esse valor é maior que 20');
}

