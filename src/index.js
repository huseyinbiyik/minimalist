import "./style.css";
import { addItem } from "./modules/addItem.js";

const listContainer = document.querySelector("#list-container");

export const toDoObjects = [];

function displayLastAddedElement() {
  let lastEl = toDoObjects.slice(-1);
  console.log(lastEl);
console.log(toDoObjects);

    listContainer.innerHTML += `
  <li class="to-do-item">
  <input class="to-do-input" type="checkbox">
  <p>${lastEl[0].content}</p>
  <span class="material-symbols-outlined">
  more_vert
  </span>
  </li>`;
  
}

const addNewForm = document.querySelector("#add-list-form");
const addTaskInput = document.querySelector("#add-task");

addNewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  toDoObjects.push(new addItem(addTaskInput.value));
  displayLastAddedElement();
});
