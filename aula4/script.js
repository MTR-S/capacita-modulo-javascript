let counter = 0;

function adicionarTarefa() {
  const inputDoUsuario = document.getElementById("tarefa");
  const valorDoInput = inputDoUsuario.value;

  if (valorDoInput.trim() === "") {
    alert("Por favor, digite uma tarefa!");
    return;
  }

  const tarefa = document.createElement("li");
  tarefa.innerText = valorDoInput;
  tarefa.id = `item-${counter}`;
  tarefa.classList.add("tarefa-nao-concluida");
  tarefa.innerText = valorDoInput;

  const botaoTarefaConcluida = document.createElement("button");
  botaoTarefaConcluida.id = `botao-${counter}`;
  botaoTarefaConcluida.classList.add("botao-tarefa-concluida");
  botaoTarefaConcluida.innerText = "Concluir";

  (function (idAtual) {
    botaoTarefaConcluida.addEventListener("click", () => {
      const tarefa = document.getElementById(`item-${idAtual}`);
      tarefa.classList.toggle("tarefa-concluida");
    });
  })(counter);

  const botaoExcluirTarefa = document.createElement("button");
  botaoExcluirTarefa.id = `botao-excluir-${counter}`;
  botaoExcluirTarefa.classList.add("botao-excluir-tarefa");
  botaoExcluirTarefa.innerText = "Excluir";

  botaoExcluirTarefa.addEventListener("click", () => {
    const lista = document.getElementById("lista");
    lista.removeChild(tarefa);
  });

  tarefa.appendChild(botaoTarefaConcluida);
  tarefa.appendChild(botaoExcluirTarefa);

  const lista = document.getElementById("lista");
  lista.appendChild(tarefa);

  inputDoUsuario.value = "";

  counter++;
}
