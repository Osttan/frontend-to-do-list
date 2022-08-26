let idTarefa = 0;

//1. Adicionar tarefa
//Pegar o valor digitado pelo usuário
const inputTarefa = document.getElementById("tarefa-nova");

// Criar função para adicionar tarefa
const adicionarTarefa = () => {
  if (inputTarefa.value != "") {
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
  } else {
    alert("Por favor insira uma tarefa");
  }
};

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
function concluir(itemId) {
  console.log(itemId);
  const tarefaSelecionada = document.getElementById(itemId);
  tarefaSelecionada.className = "concluida";
}

// 4. Excluir tarefa ao clicar no botão
function excluir(e) {
  document.querySelector(".excluir").parentElement.remove();
  e.preventDefault();
}
