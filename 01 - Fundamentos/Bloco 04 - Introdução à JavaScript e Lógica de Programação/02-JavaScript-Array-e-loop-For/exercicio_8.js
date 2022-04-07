//Exercício 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado.

let numeros = [1];
for (i = 0; i < 24; i += 1) {
    numeros.push(numeros[i] + 1);
}
console.log('Array de 1 até 25: ' + numeros);