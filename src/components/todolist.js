import TodoItem from './todoitem';

export default class TodoList {
  static list = []

  static uniqueId = 0

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

  static getFromId(id) {
    return this.list.findIndex((item) => item.id === id);
  }

  static removeFromId(id) {
    return this.remove(this.getFromId(id));
  }

  static check(index) {
    this.list[index].completed = !this.list[index].completed;
  }

  //* updates the description of the element using it's index position
  static update(index, newDescription) {
    if (index < 0 || newDescription === null) return false;
    this.list[index].description = newDescription;
    return true;
  }
}
