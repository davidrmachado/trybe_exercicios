//Exercício 1 - Crie um algorítimo que retorne o fatorial de 10.

let numero = 10;
let n = numero;
let fatorial = numero;

for (let i = 1; i < numero; i = i + 1) {
    n = n - 1;
    fatorial = fatorial * n;
}

console.log('O valor de ' + numero + '! é: ' + fatorial);
