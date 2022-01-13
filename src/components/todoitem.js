export default class TodoItem {
  constructor(description, id, completed = false) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }

  // *Creates an item element to append to the DOM
  createTodoElement() {
    const liElement = document.createElement('li');
    liElement.id = this.id;
    liElement.className = 'list-item list-item__item';
    liElement.setAttribute('aria-current', 'false');
    liElement.innerHTML = `<div class="wrapper">
    <input id="check"  class="checkbox" type="checkbox" name="completed" ${
  this.completed === true ? 'completed' : ''
}>
    <label class="label">
      <input id="todo_item_description" class="todo-item-description" name="todoItemDescription" type="text" value="${
  this.description
}">
      <i class="fas fa-ellipsis-v"></i>
    </label>
  </div>
  `;
    //* onchange event for the input
    const inputDescription = liElement.querySelector('#todo_item_description');
    inputDescription.addEventListener('change', (e) => {
      if (e.target.value === '') {
        this.list.removeFromId(e.target.id);
        e.target.parentNode.parentNode.parentNode.remove();
      }
    });

    //* checkbox event
    const check = liElement.querySelector('#check');
    check.addEventListener('change', (e) => {
      this.completed = !this.completed;
      const input = e.target.parentNode.querySelector('#todo_item_description'); // *list item input
      //* if checkbox is checked input is disabled
      if (e.target.checked) input.setAttribute('disabled', 'true');
      //* if checkbox is not checked input is enabled
      else if (!e.target.checked) input.removeAttribute('disabled');
    });

    this.element = liElement;
    return this.element;
  }
}
