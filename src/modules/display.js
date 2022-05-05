import { listContainer } from "..";
import inputChecker from "./inputChecker";
import edit from "./edit";
export default function display() {
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