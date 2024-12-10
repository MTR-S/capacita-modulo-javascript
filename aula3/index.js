// QUESTAO 1:

const arrayDeNumeros = [];

for (let i = 0; i <= 30; i++) {
  arrayDeNumeros.push(23 + i);
  console.log(`Index (${i}): ${arrayDeNumeros[i]}`);
}

// QUESTAO 2:

let nome = ["Dino", "Baby", "Charlote"];

nome.map((valor, index, array) => {
  array[index] += " da Silva Sauro";
});

console.log(nome);
