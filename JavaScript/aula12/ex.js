let varA = 'A';
let varB = 'B';
let varC = 'C';

// const varATemp = varA;
// varA = varB; // B
// varB = varC; // C
// varC = varATemp; // A

[varA, varB, varC] = [varB, varC, varA]


console.log(varA, varB, varC);

