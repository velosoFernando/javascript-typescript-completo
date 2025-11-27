/*
Fernando Veloso tem 30 anos, pesa 84kg, tem 1.73 de altura e seu indiceMassaCorporal é de... 
Fernando Veloso nasceu em...
*/

const nome = 'Fernando';
const sobrenome = 'Veloso';
const idade = 30;
const peso = 84;
const alturaEmM = 1.73;
let indiceMassaCorporal; // Para calcular o indiceMassaCorporal = peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM); // Calculando o indiceMassaCorporal
anoNascimento = 2025 - idade; // Descobrindo o ano de nascimento

console.log(nome, sobrenome, 'tem', idade, 'pesa', peso, 'kg', 'tem', alturaEmM, 'e seu indiceMassaCorporal é de', indiceMassaCorporal);
console.log(nome, 'nasceu em', anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}, tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}!`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}!`)

console.log(indiceMassaCorporal);
console.log(anoNascimento);
