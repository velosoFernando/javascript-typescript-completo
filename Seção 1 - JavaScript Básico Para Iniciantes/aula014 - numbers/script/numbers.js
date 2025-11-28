// Padrão IEEE 754-2008

let num1 = 1; // number
let num2 = 2.5; // number
console.log(num1 + num2); // faço a conta
console.log(num1.toString() + num2); // transformo o num1 em string e concateno ele a num2

let num3 = 10;
console.log(num3.toString(2)); // transforma o número em binário

let num4 = 10.578955125547;
console.log(num4.toFixed(2)); // arredondo os números indicando o número de casas decimais (após o ponto)

console.log(Number.isInteger(num1)); // true para número inteiro e false para número flutuante

let temp = num1 * 'Olá';
console.log(Number.isNaN(temp)); // retorna true pq é uma conta inválida

let tempo = num1 * '5';
console.log(Number.isNaN(tempo)); // retorna false pq é uma conta válida

// Imprecisão

let num5 = 0.7;
let num6 = 0.1;
console.log(num5 + num6); // 0.7999999999999999

let num7 = 0.7;
let num8 = 0.1;
// num7 += num8; // num7 = num7 + num8
num7 += num8; // 0.8
num7 += num8; // 0.9
num7 += num8; // 1.0
num7 += num8; // 1.1
num7 += num8; // 1.2
num7 += num8; // 1.3
num7 += num8; // 1.4
num7 += num8; // 1.5
num7 = parseFloat(num7.toFixed(2)); // transforma o número em string com 2 casas decimais, exemplo "1.50" // 'parseFloat' transforma "1.50" em número real novamente, posso fazer o mesmo usando 'Number' [num7 = Number(num7.toFixed(2));]
console.log(Number.isInteger(num7));
console.log(num7);

// Imprecisão utilizando conta

let num9 = 0.7;
let num10 = 0.1;
num9 = ((num9 * 100) + (num10 * 100)) / 100; // 0.8
num9 = ((num9 * 100) + (num10 * 100)) / 100; // 0.9
num9 = ((num9 * 100) + (num10 * 100)) / 100; // 1.0

console.log(num9);
console.log(Number.isInteger(num9));

