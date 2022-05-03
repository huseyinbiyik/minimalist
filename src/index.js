import './style.css';

const listContainer = document.querySelector('#list-container')

let toDoObjects = [{
  content: "wash the dishes",
  complete: false,
  index: 1
}, {
  content: "complete To Do list project",
  complete: false,
  index: 2
}, ]

toDoObjects.forEach((task) => {
  listContainer.innerHTML += `
  <li class="to-do-item">
  <input class="to-do-input" type="checkbox">
  <p>${task.content}</p>
  <span class="material-symbols-outlined">
  more_vert
  </span>
   </li>`
})