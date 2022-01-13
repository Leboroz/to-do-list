import TodoItem from './todoitem';

export default class TodoList {
  static list = []

  //* add an item to the list
  static addTodoItem(description, compleated = false) {
    if (description.length < 1) return false;
    this.list.push(new TodoItem(description, compleated));
    return true;
  }

  //* remove an item to the list
  static remove(index) {
    if (index < 0) return false;
    this.list.splice(index, 1);
    return true;
  }

  //* updates the description of the element using it's index position
  static update(index, newDescription) {
    if (index < 0 || newDescription === null) return false;
    this.list[index].description = newDescription;
    return true;
  }

  // *Creates an item element to append to the DOM
  static createTodoElement(index) {
    const { description } = this.list[index];
    const liElement = document.createElement('li');
    liElement.className = 'list-item list-item__item';
    liElement.setAttribute('aria-current', 'false');
    liElement.innerHTML = `<div class="wrapper">
    <input id="check"  class="checkbox" type="checkbox" name="completed" >
    <label class="label">
      <input id="todo_item_description" class="todo-item-description" name="todoItemDescription" type="text" value="${description}">
      <i class="fas fa-ellipsis-v"></i>
    </label>
  </div>
  `;
    //* onchange event for the input
    const inputDescription = liElement.querySelector('#todo_item_description');
    inputDescription.addEventListener('change', (e) => {
      if (e.target.value === '') {
        e.target.parentNode.parentNode.parentNode.remove();
        this.list.pop();
      }
    });

    //* checkbox event
    const check = liElement.querySelector('#check');
    check.addEventListener('click', (e) => {
      const input = e.target.parentNode.querySelector('#todo_item_description'); // *list item input
      //* if checkbox is checked input is disabled
      if (e.target.checked) input.setAttribute('disabled', 'true');
      //* if checkbox is not checked input is enabled
      else if (!e.target.checked) input.removeAttribute('disabled');
    });

    return liElement;
  }
}
