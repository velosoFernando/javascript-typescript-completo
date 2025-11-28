const numero = Number(prompt('Digite um número:')); // estou pedindo para digitar o n°, convertendo de string para Number usando o objeto Number
const numeroTitulo = document.getElementById('numeroTitulo'); // estou dizendo para o JS selecionar esse elemento e salvando ele na variável numeroTitulo

const texto = document.getElementById('texto'); // repito o processo para texto

numeroTitulo.innerHTML = numero;
// texto.innerHTML = `<p>Seu número ${numero} - 2 é ${numero - 2}</p>`

texto.innerHTML = ''; // deixo o campo de texto vazio para ser substituído
texto.innerHTML += `<p>Raíz quadrada de ${numero} é <strong>${numero ** 2}</strong>!</p>`;
texto.innerHTML += `<p>O número ${numero} é inteiro? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>O número ${numero} é NaN? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>O número arredondado para baixo é: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>O número arredondado para cima é: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>O número com limite de duas casas decimais fica: ${numero.toFixed(2)}</p>`;