
import "./style.css";
import { addItem } from "./modules/addItem.js";


const listContainer = document.querySelector("#list-container");

export const toDoObjects = [];


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

const addNewForm = document.querySelector("#add-list-form");
const addTaskInput = document.querySelector("#add-task");


  addNewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    toDoObjects.push(new addItem(addTaskInput.value));
  });


