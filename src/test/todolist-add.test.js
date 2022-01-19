import TodoList from "../components/todolist";

describe("Adding an item to TodoList", () => {
  test("Add 1 item to the list", () => {
    const description = "This is item 1";

    TodoList.addTodoItem(description);

    expect(TodoList.list[0].description).toBe(description);
    TodoList.list = [];
  });

  test("Add 5 items to the list", () => {
    const descriptions = [
      "This is item 1",
      "This is item 2",
      "This is item 3",
      "This is item 4",
      "This is item 5",
    ];

    descriptions.forEach((item) => TodoList.addTodoItem(item));

    expect(TodoList.list.map((todoItem) => todoItem.description)).toEqual(
      descriptions
    );

    TodoList.list = [];
  });
});
