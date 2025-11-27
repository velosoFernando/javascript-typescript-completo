const nome = prompt('Digite seu nome completo:');

// mostra o nome
document.body.innerHTML += `O seu nome é: <strong>${nome}</strong>! <br>`;

// faz a contagem dos caracteres 
document.body.innerHTML += `O seu nome tem <strong>${nome.length}</strong> letras! <br>`;

// mostra qual a segunda letra do nome, lembrando que a contagem tem start no 0
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong>! <br>`;

// mostra onde a primeira letra 'a' aparece no nome
document.body.innerHTML += `O primeiro índice da letra 'a' do seu nome é: <strong>${nome.indexOf('a')}</strong>! <br>`;

// mostra onde a última letra aparece no nome
document.body.innerHTML += `O último índice da letra 'a' no seu nome é: <strong>${nome.lastIndexOf('a')}</strong>! <br>`;

// separar as palavras onde existe espaço através do split, vou iniciar a contagem dos caracteres de trás pra frente com o slice (usando valor negativo) e junto tudo novamente usando o join através dos espaços
document.body.innerHTML += `As últimas 3 palavras do seu nome são: <strong>${nome.split(' ').slice(-3).join(' ')}</strong>! <br>`;

// faço a divisão do nome criando um array e não exibindo espaços
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong>! <br>`;

// mudo todo o nome para letras maiúsculas
document.body.innerHTML += `Seu nome com letras maiúsculas fica: <strong>${nome.toUpperCase()}</strong>! <br>`;

// mudo todo o nome para letras minúsculas
document.body.innerHTML += `Seu nome com letras minúsculas fica: <strong>${nome.toLowerCase()}</strong>!`;
