import TodoList from '../todolist';

const deleteTodoItem = (container, index) => {
  container.remove();
  TodoList.remove(index);
  return true;
};

export default deleteTodoItem;
