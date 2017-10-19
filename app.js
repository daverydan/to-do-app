function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // create a delete button
    let deleteButton = document.createElement('button');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // add deleteButton text
    deleteButton.textContent = 'X';
    deleteButton.classList.add('deleteBtn'); // easier to do .classList.contains
    // deleteButton.className = 'deleteBtn'; // still does .classList.contains

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the delete button to the li
    newLi.appendChild(deleteButton);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';

    // delete ToDo item, this adds an event listener to each li
    // target ul instead > below
    /* deleteButton.addEventListener('click', event => {
      event.target.parentNode.remove();
    }); */
  });

  const list = document.querySelector('#toDoList');
  // add event listener to the ul
  list.addEventListener('click', event => {
    if (event.target.classList.contains('deleteBtn')) {
      event.target.parentNode.remove();
    }
  });
}

window.onload = function() {
  onReady();
};
