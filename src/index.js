import "./sass/index.scss";
import TodoList from "./components/todolist";
import deleteTodoItem from "./components/utils/delete";
import moveTodoItem from "./components/utils/move";
import LocalStorage from "./components/local-storage";
import TodoItem from "./components/todoitem";
import addToDOM from "./components/utils/add";

const list = document.querySelector("#list");
const localStorageList = LocalStorage.get();

if (localStorageList && localStorageList.length > 0) {
  TodoList.list = localStorageList.map(
    (item) => new TodoItem(item.description, item.id, item.completed)
  );
  TodoList.uniqueId = TodoList.list[TodoList.list.length - 1].id + 1;

  TodoList.list.forEach((item) => {
    const ele = item.createTodoElement();
    addToDOM(list, ele);
  });
}
const addInput = document.querySelector("#add_input");

addInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    //* if enter is pressed
    if (TodoList.addTodoItem(e.target.value, TodoList.uniqueId)) {
      TodoList.uniqueId += 1;
      //* last element from list
      const ele = TodoList.list[TodoList.list.length - 1].createTodoElement();
      addToDOM(list, ele);
      LocalStorage.update();
      e.target.value = "";
    }
  }
});

const deleteTodoItemHandler = (e) => {
  const container = e.target.parentNode.parentNode.parentNode;
  const index = Array.from(
    document.querySelectorAll(".list-item__item")
  ).indexOf(container);
  deleteTodoItem(container, index);
  LocalStorage.update();
};

// const getDragAfterElement = (container, y) => {
//   const todoItems = [
//     ...container.querySelectorAll(".draggable:not(.dragging)"),
//   ];
//   todoItems.reduce(
//     (closest, child) => {
//       const metrics = child.getBoundingClientRect();
//       console.log(metrics);
//     },
//     { offset: Number.POSITIVE_INFINITY }
//   );
// };

list.addEventListener("dragover", (e) => {
  e.preventDefault();
  const dragging = list.querySelector(".dragging");
});

const changeIcon = (container) => {
  const button = container.querySelector(".fas");
  button.classList.toggle("fa-ellipsis-v");
  button.classList.toggle("fa-trash-alt");

  if (button.className.includes("fa-ellipsis-v")) {
    button.removeEventListener("click", deleteTodoItemHandler);
    button.addEventListener("click", moveTodoItem);
  }

  if (button.className.includes("fa-trash-alt")) {
    button.removeEventListener("click", moveTodoItem);
    button.addEventListener("click", deleteTodoItemHandler);
  }
};

document.addEventListener("click", (e) => {
  const element = e.target.closest(".list-item__item");
  const current = list.querySelector('li[aria-current="true"]');

  if (element) {
    if (element.ariaCurrent === "false" && current) {
      current.setAttribute("aria-current", "false");
      element.setAttribute("aria-current", "true");
      changeIcon(current);
      changeIcon(element);
    } else if (element.ariaCurrent === "false") {
      element.setAttribute("aria-current", "true");
      changeIcon(element);
    }
  } else if (current) {
    current.setAttribute("aria-current", "false");
    changeIcon(current);
  }
});

const button = document.createElement("li");
button.className = "list-item list-item__button-wrapper";
button.innerHTML = `
<button class="btn" type="button">Clear all completed</button>`;
button.addEventListener("click", () => {
  const items = Array.from(list.querySelectorAll(".list-item__item"));
  items.forEach((element) => {
    if (element.querySelector("#check").checked) {
      const index = TodoList.getFromId(Number(element.id));
      deleteTodoItem(element, index);
    }
  });
  LocalStorage.update();
});

list.appendChild(button);

const dragDrop = () => {
  Sortable.create(list, {});
};

document.addEventListener("DOMContentLoaded", dragDrop());
