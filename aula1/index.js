let number_increment = 1;
const number_not_increment = 1;

function tenta_incrementar_let() {
  number_increment++;
  document.getElementById(
    "numero_incrementado"
  ).textContent = `Let = ${number_increment}`;
  console.log(number_increment);
}

function tenta_incrementar_const() {
  alert("Você não pode incrementar uma variável do tipo: const!");
}

function analisa_idade() {
  let idade = prompt("Digite sua idade: ");

  if (idade >= 18) {
    alert("Você é maior de idade, acesso liberado!");
    return;
  }

  alert(
    "Você é menor de idade, infelizmente não será possível acessar nosso site!"
  );
}

let year_of_birth = new Date(
  prompt("Digite sua data de nascimento (Formatação Americana): ")
).getFullYear();
let current_year = new Date().getFullYear();

console.log(
  `Ano de nascimento: ${year_of_birth} - Ano atual: ${current_year} = Idade: ${
    current_year - year_of_birth
  }`
);
