const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = a1.concat(a2, [7,8,9], 'Emerson'); // -> Método para concatenar arrays
// -> também pode ser usado o ... rest -> ... spread 
const a4 = [...a1, 'Emerson', ...a2, ...[7,8,9]];
console.log(a4);
