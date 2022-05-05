import "./style.css";
import { addItem } from "./modules/addItem.js";
import display from "./modules/display.js";
import indexSetter from "./modules/indexSetter";
import clearAll from "./modules/clearAll";

export const listContainer = document.querySelector("#list-container");
const addNewForm = document.querySelector("#add-list-form");
const addTaskInput = document.querySelector("#add-task");
const clearButton = document.querySelector("#clear-button");


if (!JSON.parse(localStorage.getItem("todolist"))) {
  localStorage.setItem("todolist", JSON.stringify([]));
}

display();



addNewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let itemsArray = JSON.parse(localStorage.getItem("todolist"));
  itemsArray.push(new addItem(addTaskInput.value));
  localStorage.setItem("todolist", JSON.stringify(itemsArray));
  indexSetter();
  display();
  formReset();
});

function formReset() {
  addNewForm.reset();
}

clearButton.addEventListener("click", clearAll) ;

