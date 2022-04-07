let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let number = 0;

//Exercício 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o.
for (let i = 0; i < numbers.length; i+= 1) {
    if (number < numbers[i]) {
        number = numbers[i]; 
    }
}

console.log('O maior dos números desse array é ' + number);