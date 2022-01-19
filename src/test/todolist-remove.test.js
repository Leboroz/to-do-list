import { TestWatcher } from "jest";
import TodoList from "../components/todolist";

describe("Delete item from TodoList", () => {
  test("Delete an item from list", () => {
    const description = "First to delete";

    TodoList.addTodoItem(description);
    const expected = TodoList.remove(0);

    expect(expected).toBe(true);
  });
});
