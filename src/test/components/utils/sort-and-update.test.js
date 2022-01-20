import sortAndUpdate from '../../../components/utils/sort-and-update';

describe('sort and update', () => {
  test('sort the array with new drag', () => {
    const first = [
      { name: 'item 1', check: true },
      { name: 'item 2', check: true },
      { name: 'item 3', check: true },
    ];
    let second = [
      { description: 'item 3', completed: true, id: 0 },
      { description: 'item 2', completed: true, id: 1 },
      { description: 'item 1', completed: true, id: 2 },
    ];

    second = sortAndUpdate(first, second);

    expect(second).toEqual([
      { description: 'item 1', completed: true, id: 0 },
      { description: 'item 2', completed: true, id: 1 },
      { description: 'item 3', completed: true, id: 2 },
    ]);
  });
});
