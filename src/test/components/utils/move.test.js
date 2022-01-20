import moveTodoItem from '../../../components/utils/move';

test('Review the move event', () => {
  expect(moveTodoItem()).toBe('This will be a move event');
});
