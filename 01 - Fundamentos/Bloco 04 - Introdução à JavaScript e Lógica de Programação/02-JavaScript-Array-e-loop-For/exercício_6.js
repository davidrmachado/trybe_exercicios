let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let number = 0;

//Exercício 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado".
for (let i = 0; i < numbers.length; i += 1) {
    let sobra = numbers[i] % 2;

    if (sobra != 0) {
        number = number + 1;
    }
}

if (number == 0){
    console.log('Nenhum valor ímpar encontrado')
} else {
    console.log('O número de valores ímpares nesse array é ' + number)
}
