//Exercício 4 - Faça um for/in que mostre todos os valores das chaves do objeto:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  }

info['recorrente'] = 'Sim';

for (let key in info) {
    console.log(info[key]);
}