let num1 = 9.54578;
let num2 = Math.floor(num1); // arredondando para baixo o num1
console.log(num2)

let num3 = Math.ceil(num1); // arredonda para cima
console.log(num3);

let num4 = Math.round(num1); // arredonda para o número mais próximo (na metade ele arredonda para cima)
console.log(num4);

console.log(Math.max(1,2,3,4,10,1500,300,400)); // pega o maior número da sequência

const aleatorio = Math.random() * (10 - 5) + 5; // estou pedindo um número aleatório e fazendo com que ele fique entre 10 e 5
const aleatorioArredondado = Math.round(Math.random() * (10 - 5) + 5); // estou pedindo um número aleatório entre 10 e 5 e fazendo com que ele fique arredondado (round)
console.log(aleatorio);
console.log(aleatorioArredondado);

console.log(Math.PI); // valor de PI no console
console.log(Math.pow(2, 10)); // faço 2 elevado a 10, lembrando que tenho o operador **

let num5 = 9;
console.log(num5 ** (1/2)); // raíz quadrado de um número
console.log(num5 ** 0.5); // outra forma de descobrir a raíz quadrada de um número

