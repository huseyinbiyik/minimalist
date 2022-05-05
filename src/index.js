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
  let status = "";
  listContainer.innerHTML = ``;
  restoredData.forEach((element) => {
    if (element.complete === true) {
      status = "checked";
    } else {
      status = "";
    }
    listContainer.innerHTML += `
    <li class="to-do-item">
    <input id="${element.indexNumber}" class="to-do-input"  type="checkbox" ${status}>
    <input class="strikethrough editable-input" data-index="${element.indexNumber}" type="text" value="${element.content}">
    <span class="material-symbols-outlined">
    more_vert
    </span>
    </li>`;
  });
  inputChecker();
  edit();
}
display();

function indexSetter() {
  let restoredData = JSON.parse(localStorage.getItem("todolist"));
  function setIndex(item, index) {
    item.indexNumber = index;
  }
  restoredData.forEach(setIndex);

  localStorage.setItem("todolist", JSON.stringify(restoredData));
}

addNewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let itemsArray = JSON.parse(localStorage.getItem("todolist"));
  itemsArray.push(new addItem(addTaskInput.value));
  localStorage.setItem("todolist", JSON.stringify(itemsArray));
  indexSetter();
  display();
  formReset();
});

function inputChecker() {
  let toDoInputBox = document.querySelectorAll(".to-do-input");
  toDoInputBox.forEach((element) => {
    element.addEventListener("click", (e) => {
      let restoredData = JSON.parse(localStorage.getItem("todolist"));
      let targetEl = e.target;
      let targetId = targetEl.id;
      if (targetEl.checked === true) {
        restoredData[targetId].complete = true;
      } else {
        restoredData[targetId].complete = false;
      }
      localStorage.setItem("todolist", JSON.stringify(restoredData));
    });
  });
}

function formReset() {
  addNewForm.reset();
}

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  let restoredData = JSON.parse(localStorage.getItem("todolist"));
  restoredData = restoredData.filter((element) => {
    if (element.complete === false) {
      return true;
    } else {
      return false;
    }
  });
  localStorage.setItem("todolist", JSON.stringify(restoredData));
  indexSetter();
  display();
});

//edit
function edit() {
  let editForm = document.querySelectorAll(".editable-input");

  editForm.forEach((e) => {
    let restoredData = JSON.parse(localStorage.getItem("todolist"));
    e.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.target.blur();
        restoredData[e.target.getAttribute("data-index")].content =
          e.target.value;
      }
      localStorage.setItem("todolist", JSON.stringify(restoredData));
    });
  });
}
