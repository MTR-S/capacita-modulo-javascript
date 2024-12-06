function somar() {
  console.log("Entrou na função de somar");

  let valorNum1 = parseInt(document.getElementById("num1").value);
  let valorNum2 = parseInt(document.getElementById("num2").value);

  let resultado = valorNum1 + valorNum2;

  console.log("Valor Soma: " + resultado);

  let referenciaResultado = document.getElementById("resultado");
  referenciaResultado.value = resultado;
}

function dividir() {
  console.log("Entrou na função de dividir");

  let valorNum1 = Number(document.getElementById("num1").value);
  let valorNum2 = Number(document.getElementById("num2").value);

  if (valorNum2 == 0) {
    alert("Não é possível dividir por zero!");
    return;
  }

  let resultado = valorNum1 / valorNum2;

  console.log("Valor Divisão: " + resultado);

  let referenciaResultado = document.getElementById("resultado");
  referenciaResultado.value = resultado;
}

function subtrair() {
  console.log("Entrou na função de subtrair");

  let valorNum1 = Number(document.getElementById("num1").value);
  let valorNum2 = Number(document.getElementById("num2").value);

  let resultado = valorNum1 - valorNum2;

  console.log("Valor Subtração: " + resultado);

  let referenciaResultado = document.getElementById("resultado");
  referenciaResultado.value = resultado;
}

function multiplicar() {
  console.log("Entrou na função de multiplicar");

  let valorNum1 = Number(document.getElementById("num1").value);
  let valorNum2 = Number(document.getElementById("num2").value);

  let resultado = valorNum1 * valorNum2;

  console.log("Valor Multiplicação: " + resultado);

  let referenciaResultado = document.getElementById("resultado");
  referenciaResultado.value = resultado;
}
