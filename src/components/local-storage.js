import TodoList from './todolist';

export default class LocalStorage {
  //* creates list in local storage
  static update() {
    if (TodoList.list && TodoList.list.length === 0) {
      localStorage.clear();
      return;
    }
    const stringedList = JSON.stringify(TodoList.list);
    localStorage.setItem('list', stringedList);
  }

  //* gets list in local storage
  static get() {
    return JSON.parse(localStorage.getItem('list'));
  }
}
