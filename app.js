function onReady() {
  const toDos = []; // init state
  const addToDoForm = document.getElementById('addToDoForm');
  const toDoList = document.getElementById('toDoList');

  function createNewTodo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return }

    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';

    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteBtn = document.createElement('button');
      checkbox.type = 'checkbox';
      deleteBtn.textContent = 'X';
      deleteBtn.classList = 'deleteBtn';

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewTodo();
  });

  toDoList.addEventListener('click', event => {
    if (event.target.classList.contains('deleteBtn')) {
      event.target.parentNode.remove();
    }
  });

  renderTheUI(toDos);
}

window.onload = function() {
  onReady();
};
