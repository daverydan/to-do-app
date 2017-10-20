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

  // using the added id
  function deleteToDo(toDo) {
    if (toDo.classList.contains('deleteBtn')) {
      toDos.splice(toDo.id, 1);
      renderTheUI(toDos);
    }
  }

  /* using the text from the title
  function deleteToDo(toDo) {
    // remove 'X' from end of text
    const toDoToRemoveText = toDo.parentNode.textContent.substring(0, toDo.parentNode.textContent.length - 1);

    if (toDo.classList.contains('deleteBtn')) {
      const indexOfToDoToRemove = toDos.findIndex(todo => todo.title === toDoToRemoveText);
      // remove todo at index # and 1 item only
      toDos.splice(indexOfToDoToRemove, 1);
      renderTheUI(toDos);
    }
  } */

  function renderTheUI(toDos) {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    let count = -1;

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteBtn = document.createElement('button');
      checkbox.type = 'checkbox';
      deleteBtn.textContent = 'X';
      deleteBtn.classList.add('deleteBtn');
      count++;
      deleteBtn.setAttribute('id', count);

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
    deleteToDo(event.target);
  });

  renderTheUI(toDos);
}

window.onload = function() {
  onReady();
};
