// função declarada
function saudacao(nome) {
    console.log(`Bom dia, ${nome}`);
    return `Bom dia, ${nome}`;
}

saudacao('Fernando'); // fernando é o argumento
saudacao('Maria'); // maria é o argumento
saudacao('Felipe'); // felipe é o argumento
// log
// Bom dia, Fernando
// Bom dia, Maria
// Bom dia, Felipe

const variavel = saudacao('Fernando');
console.log(variavel);

function soma(x, y) {
    const resultado = x + y; 
    return resultado;
}
// vou atribuir valores aos parâmetros (x, y), posso fazer isso diversas vzs
console.log(soma(2, 2)); // x = 2, y = 2
console.log(soma(3, 1)); // x = 3, y = 1
console.log(soma(5, 10)); // x = 5, y = 10
// log
// 4
// 4
// 15


function soma2(x = 1, y = 2) { // defino um valor fixo de parâmetro
    const resultado2 = x + y; 
    return resultado2;
}
const resultado2 = soma2(); // não digo quais os valores, mas posso substituir usando (2, 2) por exemplo
console.log(resultado2);
// log
// 3

// função anônima
const raiz = function(n) { 
    return n ** 0.5;
}; // obrigatório receber ;

console.log(raiz(9)); // atribuo 9 a n
console.log(raiz(12)); // atribuo 12 a n
console.log(raiz(44)); // atribuo 44 a n
// log 
// 3
// 3.4641016151377544
// 6.6332495807108


// arrow function
// elimina as aspas, function e o return
const subtracao = (g) => g - 3; // leva o nome por causa da flecha (arrow)

console.log(subtracao(12));
console.log(subtracao(21));
console.log(subtracao(33));
// log
// 9
// 18
// 30