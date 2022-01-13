import './sass/index.scss';
import TodoList from './components/todolist';
import deleteTodoItem from './components/utils/delete';
import moveTodoItem from './components/utils/move';
import LocalStorage from './components/local-storage';
import TodoItem from './components/todoitem';

const list = document.querySelector('#list');
const localStorageList = LocalStorage.get();
if (localStorageList && localStorageList.length > 0) {
  TodoList.list = localStorageList.map((item) => {
    const createdTodoItem = new TodoItem(
      item.description,
      TodoList.uniqueId,
      item.completed,
    );
    TodoItem.uniqueId += 1;
    return createdTodoItem;
  });
  TodoList.uniqueId = TodoList.list[TodoList.list.length - 1].id + 1;
  TodoList.list.forEach((item) => {
    list.insertBefore(item.createTodoElement(), list.lastChild);
  });
}
const addInput = document.querySelector('#add_input');

addInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    //* if enter is pressed
    if (TodoList.addTodoItem(e.target.value, TodoList.uniqueId)) {
      TodoList.uniqueId += 1;
      //* last element from list
      const ele = TodoList.list[TodoList.list.length - 1].createTodoElement();
      list.insertBefore(ele, list.lastChild);
      e.target.value = '';
    }
  }
});

const changeIcon = (container) => {
  const button = container.querySelector('.fas');
  button.classList.toggle('fa-ellipsis-v');
  button.classList.toggle('fa-trash-alt');

  if (button.className.includes('fa-ellipsis-v')) {
    button.removeEventListener('click', deleteTodoItem);
    button.addEventListener('click', moveTodoItem);
  }

  if (button.className.includes('fa-trash-alt')) {
    button.removeEventListener('click', moveTodoItem);
    button.addEventListener('click', deleteTodoItem);
  }
};

document.addEventListener('click', (e) => {
  const element = e.target.closest('.list-item__item');
  const current = list.querySelector('li[aria-current="true"]');

  if (element) {
    if (element.ariaCurrent === 'false' && current) {
      current.setAttribute('aria-current', 'false');
      element.setAttribute('aria-current', 'true');
      changeIcon(current);
      changeIcon(element);
    } else if (element.ariaCurrent === 'false') {
      element.setAttribute('aria-current', 'true');
      changeIcon(element);
    }
  } else if (current) {
    current.setAttribute('aria-current', 'false');
    changeIcon(current);
  }
});

const button = document.createElement('li');
button.className = 'list-item list-item__button-wrapper';
button.innerHTML = `
<button class="btn" type="button">Clear all completed</button>`;
button.addEventListener('click', () => {
  const items = Array.from(list.querySelectorAll('.list-item__item'));
  items.forEach((element) => {
    if (element.querySelector('#check').checked) {
      TodoList.removeFromId(Number(element.id));
      element.remove();
    }
  });
});

list.appendChild(button);
