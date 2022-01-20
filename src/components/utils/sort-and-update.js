import TodoItem from '../todoitem';

export default function sortAndUpdate(list, sortList) {
  sortList = list.map(
    (item, index) => new TodoItem(item.name, index, item.check),
  );
  return sortList;
}
