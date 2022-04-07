let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let number = 0;

//Exercício 2 - Some todos os valores contidos no array e imprima o resultado.

for (let i=0; i<numbers.length; i++) {
    number=number+numbers[i]
}
console.log('A somas dos números é ' + number);