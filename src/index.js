import "./style.css";
import { addItem } from "./modules/addItem.js";

const listContainer = document.querySelector("#list-container");
const addNewForm = document.querySelector("#add-list-form");
const addTaskInput = document.querySelector("#add-task");

if (!JSON.parse(localStorage.getItem("todolist"))) {
  localStorage.setItem("todolist", JSON.stringify([]));
}

function display() {
  let restoredTasks = JSON.parse(localStorage.getItem("todolist"));
  restoredTasks.forEach((task) => {
    listContainer.innerHTML += `
    <li class="to-do-item">
    <input class="to-do-input" type="checkbox">
    <p>${task.content}</p>
    <span class="material-symbols-outlined">
    more_vert
    </span>
    </li>`;
  });
}

addNewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let restoredItems = JSON.parse(localStorage.getItem("todolist"))
  restoredItems.push(new addItem(addTaskInput.value));
  localStorage.setItem("todolist", JSON.stringify(restoredItems));
  display();
});
