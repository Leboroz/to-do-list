import LocalStorage from '../local-storage'
import TodoList from '../todolist'
const deleteTodoItem = (element) => {
  const container = element.target.parentNode.parentNode.parentNode
  const index = Array.from(
    document.querySelectorAll('.list-item__item')
  ).indexOf(container)
  console.log(index)
  container.remove()
  TodoList.remove(index)
  LocalStorage.add(TodoList.list)
}

export default deleteTodoItem
