//Exercício 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let numeros = [1];
for (i = 0; i < 24; i += 1) {
    numeros.push(numeros[i] + 1);
}

for (i = 0; i < numeros.length; i += 1) {
    numeros[i] = numeros [i] / 2;
}
console.log('Divisão de todo o array por 2: ' + numeros);