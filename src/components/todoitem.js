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
    <input id="check"  class="checkbox" type="checkbox" name="completed">
    <label class="label">
      <input id="todo_item_description" class="todo-item-description" name="todoItemDescription" type="text" value="${this.description}">
      <i class="fas fa-ellipsis-v"></i>
    </label>
  </div>
  `;
    return liElement;
  }
}
