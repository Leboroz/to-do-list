// jest.mock('../../../index')
import TodoList from '../../../components/todolist';
import addToDOM from '../../../components/utils/add';
import list from '../../mock-list';

describe('Add an item to the DOM', () => {
  test('add an item to mock list', () => {
    const description = 'mock description 1';

    TodoList.addTodoItem(description, TodoList.uniqueId);
    const ele = TodoList.list[TodoList.list.length - 1].createTodoElement();
    const expected = addToDOM(list, ele);

    expect(expected).toBe(true);
  });
});
