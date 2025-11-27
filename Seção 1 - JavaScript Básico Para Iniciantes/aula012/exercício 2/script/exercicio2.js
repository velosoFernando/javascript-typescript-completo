let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// const varAtemp = varA; // estou armazenando a variável A
// varA = varB;
// varB = varC;
// varC = varA;

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);