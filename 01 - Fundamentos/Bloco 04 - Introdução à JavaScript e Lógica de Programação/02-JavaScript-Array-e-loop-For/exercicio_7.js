let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let i = 0;
let number = numbers[i];

//Exercício 5 - Utilizando for , descubra qual o menor valor contido no array e imprima-o.
for (i = 0; i < numbers.length; i+= 1) {
    if (number > numbers[i]) {
        number = numbers[i]; 
    }
}

console.log('O menor dos números desse array é ' + number);