document.getElementById("add-todo-btn").addEventListener("click", function () {
  const input = document.getElementById("todo-input");
  const value = input.value.trim();
  if (value) {
    const ul = document.getElementById("todo-list");
    ul.appendChild(createTaskItem(value, "todo"));
    input.value = "";
    atualizarContadores();
  }
});

function createTaskItem(text, status) {
  const li = document.createElement("li");

  let doneBtn = null;
  if (status === "todo" || status === "inprogress") {
    doneBtn = document.createElement("button");
    doneBtn.textContent = "☐";
    doneBtn.title = "Marcar como concluída";
    doneBtn.className = "move-btn";
    doneBtn.onclick = function () {
      document
        .getElementById("done-list")
        .appendChild(createTaskItem(text, "done"));
      li.remove();
      if (typeof atualizarContadores === "function") atualizarContadores();
    };
    li.appendChild(doneBtn);
  }

 
  const taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.textContent = text;
  li.appendChild(taskText);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.title = "Excluir tarefa";
  deleteBtn.className = "move-btn";
  deleteBtn.onclick = function () {
    li.remove();
    if (typeof atualizarContadores === "function") atualizarContadores();
  };
  li.appendChild(deleteBtn);

  if (status === "todo") {
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "→";
    nextBtn.title = "Mover para In Progress";
    nextBtn.className = "move-btn";
    nextBtn.onclick = function () {
      document
        .getElementById("inprogress-list")
        .appendChild(createTaskItem(text, "inprogress"));
      li.remove();
      atualizarContadores();
    };
    li.appendChild(nextBtn);
  } else if (status === "inprogress") {
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "←";
    prevBtn.title = "Voltar para To Do";
    prevBtn.className = "move-btn";
    prevBtn.onclick = function () {
      document
        .getElementById("todo-list")
        .appendChild(createTaskItem(text, "todo"));
      li.remove();
      atualizarContadores();
    };
    li.appendChild(prevBtn);

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "→";
    nextBtn.title = "Mover para Done";
    nextBtn.className = "move-btn";
    nextBtn.onclick = function () {
      document
        .getElementById("done-list")
        .appendChild(createTaskItem(text, "done"));
      li.remove();
      atualizarContadores();
    };
    li.appendChild(nextBtn);
  } else if (status === "done") {
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "←";
    prevBtn.title = "Voltar para In Progress";
    prevBtn.className = "move-btn";
    prevBtn.onclick = function () {
      document
        .getElementById("inprogress-list")
        .appendChild(createTaskItem(text, "inprogress"));
      li.remove();
      atualizarContadores();
    };
    li.appendChild(prevBtn);
  }

  return li;
}
