import TodoList from "../todolist";

const deleteTodoItem = (container, index) => {
  container.remove();
  TodoList.remove(index);
};

export default deleteTodoItem;
