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
  listContainer.innerHTML += `<li><input type="checkbox"><p>${task.content}</p> </li>`
})

console.log(toDoObjects);