export default class TodoItem {
  constructor(description, completed = false) {
    this.description = description;
    this.completed = completed;
  }
}
