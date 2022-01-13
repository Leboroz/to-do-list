export default class LocalStorage {
  //* creates list in local storage
  static add(element) {
    if (element && element.length === 0) {
      localStorage.clear();
      return;
    }
    element = JSON.stringify(element);
    localStorage.setItem('list', element);
  }

  //* gets list in local storage
  static get() {
    return JSON.parse(localStorage.getItem('list'));
  }
}
