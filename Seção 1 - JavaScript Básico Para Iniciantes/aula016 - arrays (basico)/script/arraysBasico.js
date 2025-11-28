const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos[2]);

// substituir um índice do array
alunos[0] = 'Eduardo';

// maneira de adicionar item ao array (ao fim)
alunos[3] = 'Fernando'; 

// outra maneira de adicionar elementos ao array (ao fim)
alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Giovana';
alunos[alunos.length] = 'Silvio';

// melhor maneira de adicionar elementos ao  (ao fim)
alunos.push('Pedro');
alunos.push('Silvana');

// adicionar um item no começo do array
alunos.unshift('Marcelo');
alunos.unshift('Fabio'); // ao adicionar um segundo item, ele fica na frente

console.log(alunos);

// removar elemento do array (altera o índice)
const removidoFim = alunos.pop(); // do final do array (elimina o índice)
const removidoInicio = alunos.shift(); // do início do array (muda a ordem)
console.log(removidoFim);
console.log(removidoInicio);

// posso deletar um elemento sem alterar os índices 
delete alunos[1];
console.log(alunos);

// [
//   'Marcelo',
//   <1 empty item>,
//   'Maria',
//   'João',
//   'Fernando',
//   'Luiza',
//   'Giovana',
//   'Silvio',
//   'Pedro'
// ]

console.log(alunos[1]); // undefined

// acessar um índice que não existe 
console.log(alunos[50]); // undefined

// para fatiar (positivo - do elemento 0 a diante)
console.log(alunos.slice(0, 2)); 

// para fatiar (negativo - do último elemento)
console.log(alunos.slice(0, -3))

// para validar se estou trabalhando com uma array (true or false)
console.log(alunos instanceof Array); // true