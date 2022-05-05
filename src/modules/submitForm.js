import AddItem from './addItem.js';
import indexSetter from './indexSetter.js';
import display from './display.js';

const addTaskInput = document.querySelector('#add-task');
const addNewForm = document.querySelector('#add-list-form');

function formReset() {
  addNewForm.reset();
}
export default function submitForm(e) {
  e.preventDefault();
  const itemsArray = JSON.parse(localStorage.getItem('todolist'));
  itemsArray.push(new AddItem(addTaskInput.value));
  localStorage.setItem('todolist', JSON.stringify(itemsArray));
  indexSetter();
  display();
  formReset();
}
