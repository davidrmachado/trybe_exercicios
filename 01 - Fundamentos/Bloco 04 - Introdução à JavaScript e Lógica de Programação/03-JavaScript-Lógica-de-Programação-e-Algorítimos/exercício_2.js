//Exercício 2 - Desenvolva um algoritmo que seja capaz de inverter uma palavra:

let word = 'tryber';
let l = word.length;
let arrayWord = [];
let invertedArrayWord = [];

//Tranforma a palavra recebida em um array de letras:

for (let i = 0; i < l; i++) {
    arrayWord.push(word[i]);
}

//Inverte esse array:

for (let i2 = l - 1; i2 >= 0; i2 = i2 - 1) {
    invertedArrayWord.push(arrayWord[i2]);
}

//Tranforma esse array em uma palavra:

let  invertedWord = invertedArrayWord [0];

for (let i3=1; i3 < l; i3++) {
    invertedWord = invertedWord + invertedArrayWord[i3] 
}


//console.log(arrayWord);
//console.log(invertedArrayWord);
console.log('A palavra invertida é : ' + invertedWord);