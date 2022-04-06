let primeiroValor = 17;
let segundoValor = 99;
let terceiroValor = 50;

let maiorValor =0;

console.log("O maior dos valores é:");

if (primeiroValor > segundoValor) {
    maiorValor = primeiroValor;        
} else {
    maiorValor = segundoValor;
}
if (maiorValor > terceiroValor) {
    maiorValor = maiorValor;
} else {
    maiorValor = terceiroValor;
}
console.log(maiorValor);