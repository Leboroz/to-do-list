export default class LocalStorage {
  //*creates list in local storage
  static add(element) {
    element = JSON.stringify(element)
    localStorage.setItem('list', element)
  }

  //*gets list in local storage
  static get() {
    return JSON.parse(localStorage.getItem('list'))
  }
}
