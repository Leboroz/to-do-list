import LocalStorage from '../local-storage';
import TodoList from '../todolist';

const deleteTodoItem = (element) => {
  const container = element.target.parentNode.parentNode.parentNode;
  const index = Array.from(
    document.querySelectorAll('.list-item__item'),
  ).indexOf(container);
  container.remove();
  TodoList.remove(index);
  LocalStorage.update();
};

export default deleteTodoItem;
