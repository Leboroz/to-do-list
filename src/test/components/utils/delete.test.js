import TodoList from '../../../components/todolist'
import addToDOM from '../../../components/utils/add'
import deleteTodoItem from '../../../components/utils/delete'
import list from '../../mock-list'

describe('remove items from the DOM', () => {
    test('remove one item from the list', ()=> {
        const description = 'mock description 1'

        TodoList.addTodoItem(description, TodoList.uniqueId)
        const ele = TodoList.list.at(-1).createTodoElement()
        addToDOM(list, ele)
        const expected = deleteTodoItem(ele, 0)

        expect(expected).toBe(true);
    })
})