document.getElementById('add-todo-btn').addEventListener('click', function() {
  const input = document.getElementById('todo-input');
  const value = input.value.trim();
  if (value) {
    const ul = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.textContent = value;
    ul.appendChild(li);
    input.value = '';
  }
});

function createTaskItem(text, status) {
  const li = document.createElement('li');
  li.textContent = text;

  if (status === 'todo') {
    const nextBtn = document.createElement('button');
    nextBtn.textContent = '→';
    nextBtn.title = 'Mover para In Progress';
    nextBtn.onclick = function() {
      document.getElementById('inprogress-list').appendChild(createTaskItem(text, 'inprogress'));
      li.remove();
    };
    li.appendChild(nextBtn);
  } else if (status === 'inprogress') {
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '←';
    prevBtn.title = 'Voltar para To Do';
    prevBtn.onclick = function() {
      document.getElementById('todo-list').appendChild(createTaskItem(text, 'todo'));
      li.remove();
    };
    li.appendChild(prevBtn);

    const nextBtn = document.createElement('button');
    nextBtn.textContent = '→';
    nextBtn.title = 'Mover para Done';
    nextBtn.onclick = function() {
      document.getElementById('done-list').appendChild(createTaskItem(text, 'done'));
      li.remove();
    };
    li.appendChild(nextBtn);
  } else if (status === 'done') {
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '←';
    prevBtn.title = 'Voltar para In Progress';
    prevBtn.onclick = function() {
      document.getElementById('inprogress-list').appendChild(createTaskItem(text, 'inprogress'));
      li.remove();
    };
    li.appendChild(prevBtn);
  }

  return li;
}