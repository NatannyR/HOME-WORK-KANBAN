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
