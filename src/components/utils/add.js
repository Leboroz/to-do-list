import TodoList from "../todolist";
import LocalStorage from "../local-storage";
import checkHandler from "./check";
import { draggEndHandler, draggStartHandler } from "./move";

const addToDOM = (list, ele) => {
  //* onchange event for the input
  const inputDescription = ele.querySelector("#todo_item_description");

  list.addEventListener("dragstart", draggStartHandler);
  list.addEventListener("dragend", draggEndHandler);

  inputDescription.addEventListener("change", (e) => {
    const elementIndex = TodoList.getFromId(Number(ele.id));
    if (e.target.value === "") {
      TodoList.removeFromId(Number(ele.id));
      e.target.parentNode.parentNode.parentNode.remove();
    } else if (e.target.value !== TodoList.list[elementIndex].description) {
      TodoList.list[elementIndex].description = e.target.value;
      LocalStorage.update();
    }
  });

  //* checkbox event
  const check = ele.querySelector("#check");
  const input = ele.querySelector("#todo_item_description"); // *list item input
  const elementIndex = TodoList.getFromId(Number(ele.id));
  const { completed } = TodoList.list[elementIndex];
  if (completed) {
    check.checked = true;
    input.setAttribute("disabled", "true");
  }

  check.addEventListener("change", (e) => {
    TodoList.check(elementIndex);
    checkHandler(e, input);
    LocalStorage.update();
  });

  list.insertBefore(ele, list.lastChild);
  return true;
};

export default addToDOM;
