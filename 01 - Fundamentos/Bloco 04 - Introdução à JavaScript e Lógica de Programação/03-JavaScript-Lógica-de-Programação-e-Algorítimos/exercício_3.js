//Exercício - 3: Escreva um algoritmo que retorne a maior palavra de um array e outro que retorne a menor.

let array = ['java', 'javascript', 'python', 'html', 'css'];

//Para encontrar a maior palavra:
let maiorPalavra = array[0];

for (let i=0; i<array.length; i++) {
    if (maiorPalavra.length<array[i].length) {
        maiorPalavra = array[i];
    }
}

console.log('A maior palara desse array é: ' + maiorPalavra);

//Para encontrar a menor palavra:
let menorPalavra = array[0];

for (let i2=0; i2<array.length; i2++) {
    if (menorPalavra.length>array[i2].length) {
        menorPalavra = array[i2];
    }
}

console.log('A menor palara desse array é: ' + menorPalavra);