import TodoList from "../../components/todolist";

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
describe("Deleting from the list", () => {
  test("Delete an item from list", () => {
    const description = "First to delete";

    TodoList.addTodoItem(description, 1);
    const expected = TodoList.remove(0);

    expect(expected).toBe(true);
    TodoList.list = [];
  });

  test("Delete an item from list with an id", () => {
    const description = "First to delete";

    TodoList.addTodoItem(description, 1);
    const expected = TodoList.removeFromId(1);

    expect(expected).toBe(true);
    TodoList.list = [];
  });
});

test("The list item can be retreived by id", () => {
  const description = "This is item 1";

  TodoList.addTodoItem(description, 1);
  const expected = TodoList.getFromId(1);

  expect(expected).toBe(0);
  TodoList.list = [];
});

test("Should update description to new", () => {
  const description = "description";
  const newDescription = "updated description";

  TodoList.addTodoItem(description, 1);
  TodoList.update(0, newDescription);
  const expected = TodoList.list[0].description;

  expect(expected).not.toBe(description);
});

test("Should update compleated to true if false", () => {
  const description = "description";

  TodoList.addTodoItem(description, 1);
  const before = TodoList.list[0].completed;
  TodoList.check(0);
  const expected = TodoList.list[0].completed;

  expect(expected).not.toBe(before);
});
