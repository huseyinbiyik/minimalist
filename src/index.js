import "./style.css";
import { addItem } from "./modules/addItem.js";

const listContainer = document.querySelector("#list-container");
const addNewForm = document.querySelector("#add-list-form");
const addTaskInput = document.querySelector("#add-task");

if (!JSON.parse(localStorage.getItem("todolist"))) {
  localStorage.setItem("todolist", JSON.stringify([]));
}

function display() {
  let restoredData = JSON.parse(localStorage.getItem("todolist"));
  listContainer.innerHTML = ``;
  restoredData.forEach((element) => {
    listContainer.innerHTML += `
    <li class="to-do-item">
    <input class="to-do-input" type="checkbox">
    <p>${element.content}</p>
    <span class="material-symbols-outlined">
    more_vert
    </span>
    </li>`;
  });
}
display();

addNewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let itemsArray = JSON.parse(localStorage.getItem("todolist"));
  itemsArray.push(new addItem(addTaskInput.value));
  localStorage.setItem("todolist", JSON.stringify(itemsArray));
  indexSetter();
  display();
});

function indexSetter() {
  let restoredData = JSON.parse(localStorage.getItem("todolist"));
  function setIndex(item, index) {
    item.indexNumber = index;
  }
  restoredData.forEach(setIndex);

  localStorage.setItem("todolist", JSON.stringify(restoredData));
}


const toDoInputBox = document.querySelectorAll(".to-do-input");
console.log(toDoInputBox);
