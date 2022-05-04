import './style.css';

const listContainer = document.querySelector('#list-container');

const toDoObjects = [{
  content: '',
  complete: false,
  index: 1,
},];

toDoObjects.forEach((task) => {
  listContainer.innerHTML += `
  <li class="to-do-item">
  <input class="to-do-input" type="checkbox">
  <p>${task.content}</p>
  <span class="material-symbols-outlined">
  more_vert
  </span>
   </li>`;
});