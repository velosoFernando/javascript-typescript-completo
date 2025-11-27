let umaString = 'O rato roeu a roupa do rei de Roma.';
console.log(umaString.charAt(4)); // busca o quarto item do indíce

console.log(umaString.concat(' em', ' um', ' lindo dia!')); // concatena textos 
console.log(umaString + ' em um lindo dia.'); // concatena textos 
console.log(`${umaString} em um lindo dia.`); // concatena textos [A MELHOR]

console.log(umaString.indexOf('texto')); // encontra onde o item começa (índice)
console.log(umaString.indexOf('Um', 3)); // busca o item a partir do índice solicitado

console.log(umaString.match(/[a-z]/g)); // essa expressão regular solicita as letras minúsculas de uma string
console.log(umaString.match(/[A-Z]/g)); // essa expressão regular solicita as letras maiúsculas de uma string

console.log(umaString.search(/[a-z]/g)) // essa expressão regular solicita o início das letras minúsculas
console.log(umaString.search(/x/)); // essa expressão regular encontra onde está o item escrito

console.log(umaString.replace('Um', 'Outra')); // faz a substituição de um item (nesse caso a palavra 'um') por outro item descrito (nesse caso a palavra 'outra')

console.log(umaString.replace(/r/, '#')); // faz a substituição de um item (nesse caso a letra 'r') por outro item (nesse caso a '#'), mas isso só será feito uma vez

console.log(umaString.replace(/r/g, '#')); // faz a substituição de um item (nesse caso a letra 'r') por outro item (nesse caso a '#'), mas isso ocorrera repetidas vezes, já que a condição 'g' ocasiona isso

console.log(umaString.length); // faz a contagem dos caracteres, a começar com 0
console.log(umaString.slice(2, 6)); // pega os itens dentro do índice selecionado
console.log(umaString.slice(-5, -1)); // faz o mesmo processo, pegando os itens do índice de trás para frente

console.log(umaString.split(' ')); // divide o item completo através do valor selecionado (nesse caso um espaço)
console.log(umaString.split(' ', 2)); // divide o item através do valor selecionado (nesse caso um espaço) dentro do intervalo selecionado (nesse caso 2)

console.log(umaString.toUpperCase()); // converte a string para letras maiúsculas
console.log(umaString.toLowerCase()); // converte a string para letras minúsculas





