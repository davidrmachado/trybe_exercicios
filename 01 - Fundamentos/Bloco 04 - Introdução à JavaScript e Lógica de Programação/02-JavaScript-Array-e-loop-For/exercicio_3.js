let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let number = 0;

//Exercício 3 - Calcule e imprima a média aritmética dos valores contidos no array.
for (let i=0; i<numbers.length; i+= 1) {
    number=number+numbers[i]
}
number = number / numbers.length;

console.log('A média aritimética dos números é ' + number);