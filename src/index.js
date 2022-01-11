import './sass/index.scss';

const list = document.querySelector('#list');
const todoItems = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'walk the doge',
    completed: false,
    index: 1,
  },
  {
    description: 'water the plant',
    completed: false,
    index: 2,
  },
];

todoItems.forEach(({ description }) => {
  const liElement = document.createElement('li');
  liElement.className = 'list-item';
  liElement.innerHTML = `<div class="wrapper">
  <input class="checkbox" type="checkbox" name="completed" >
  <p>${description}</p>
 </div>
 <i class="fas fa-ellipsis-v"></i>
 `;
  list.appendChild(liElement);
});

const button = document.createElement('li');
button.className = 'list-item list-item__button-wrapper';
button.innerHTML = `
<button class="btn" type="button">Clear all completed</button>`;
list.appendChild(button);