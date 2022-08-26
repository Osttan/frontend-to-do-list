let idTarefa = 0;

//1. Adicionar tarefa
//Pegar o valor digitado pelo usuário
const inputTarefa = document.getElementById("tarefa-nova");

// Criar função para adicionar tarefa
const adicionarTarefa = () => {
  // Criar elemento li
  const item = document.createElement("li"); // <li> </li>
  idTarefa++;
  item.id = idTarefa;

  // Adicionar texto digitado no elemento
  // item.innerHTML = `
  //   <span>${inputTarefa.value}</span>
  //   <button class="excluir">x</button>
  // `;

  item.innerHTML = `
  <span onclick="concluir(${idTarefa})">${inputTarefa.value}</span>
  <button class="excluir" onclick="excluir(event)">x</button>
  `;

  //Pega a lista de tarefas
  const lista = document.querySelector("#lista");

  // Adicionar elemento na lista de tarefas
  lista.appendChild(item);

  // Limpa o valor digitado pelo usuário
  inputTarefa.value = "";
};

// Criar a função de marcar item como concluído
function concluir(itemId) {
  console.log(itemId);
  const tarefaSelecionada = document.getElementById(itemId);
  tarefaSelecionada.className = "concluida";
}

// Adiciona o envento de click no botão adicionar
// Quando clica você executa a funçao adicionarTarefa
document
  .querySelector("#btn-adicionar")
  .addEventListener("click", adicionarTarefa);

// 2. Limpar lista
// Pega botão Limpar
const botaoLimpar = document.querySelector(".bt-azul");

// Adiciona o envento de click no botão limpar
// Quando clica você executa a funçao definida na function
botaoLimpar.addEventListener("click", function (event) {
  const lista = document.querySelector("#lista");
  lista.innerHTML = "";
});

//Para casa:
// 3. Marcar tarefa como concluída
// 4. Excluir tarefa ao clicar no botão
