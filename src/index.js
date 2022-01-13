import './sass/index.scss';
import TodoList from './components/todolist';
import deleteTodoItem from './components/utils/delete';
import moveTodoItem from './components/utils/move';
import LocalStorage from './components/local-storage';

const list = document.querySelector('#list');

if (LocalStorage.get()) {
  TodoList.list = LocalStorage.get();
  TodoList.list.forEach((item, index) => {
    const ele = TodoList.createTodoElement(index); //* last element from list
    list.insertBefore(ele, list.lastChild);
  });
}

const addInput = document.querySelector('#add_input');

addInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    //* if enter is pressed
    if (TodoList.addTodoItem(e.target.value)) {
      const ele = TodoList.createTodoElement(TodoList.list.length - 1); //* last element from list
      list.insertBefore(ele, list.lastChild);
      e.target.value = '';
      LocalStorage.add(TodoList.list);
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
  items.forEach((item) => {
    if (item.querySelector('#check').checked) {
      const itemToDelete = item.querySelector('#todo_item_description').value;
      item.remove();
      for (let i = 0; i < TodoList.list; i += 1) {
        if (TodoList.list[i].description === itemToDelete) {
          TodoList.remove(TodoList.list.indexOf(TodoList.list[i]));
        }
      }
    }
  });
  LocalStorage.add(TodoList.list);
});

list.appendChild(button);
