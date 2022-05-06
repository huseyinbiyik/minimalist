/* eslint-disable  import/no-cycle */
import inputChecker from './inputChecker.js';
import edit from './edit.js';

const listContainer = document.querySelector('#list-container');

export default function display() {
  const restoredData = JSON.parse(localStorage.getItem('todolist'));
  let status = '';
  listContainer.innerHTML = '';
  restoredData.forEach((element) => {
    if (element.complete === true) {
      status = 'checked';
    } else {
      status = '';
    }
    listContainer.innerHTML += `
    <li class="to-do-item">
    <input id="${element.indexNumber}" class="to-do-input"  type="checkbox" ${status}>
    <input class="strikethrough editable-input" data-index="${element.indexNumber}" type="text" value="${element.content}">
    <span class="material-symbols-outlined delete-icon" data-index="${element.indexNumber}">
    delete_forever
    </span>
    <span class="material-symbols-outlined">
    more_vert
    </span>
    </li>`;
  });
  inputChecker();
  edit();
}