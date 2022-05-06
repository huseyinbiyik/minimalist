/* eslint-disable  import/no-cycle */
import display from './display.js';
import indexSetter from './indexSetter.js';

export default function edit() {
  const editForm = document.querySelectorAll('.editable-input');

  editForm.forEach((e) => {
    e.addEventListener('click', (e) => {
      const xselector = e.target;
      const parentEl = xselector.parentElement;
      parentEl.style.backgroundColor = 'yellow';
    });
  });

  editForm.forEach((el) => {
    el.addEventListener('focusout', (el) => {
      const restoredData = JSON.parse(localStorage.getItem('todolist'));
      const xselector = el.target;
      const parentEl = xselector.parentElement;
      parentEl.style.backgroundColor = 'transparent';
      parentEl.blur();
      restoredData[el.target.getAttribute('data-index') - 1].content = el.target.value;

      localStorage.setItem('todolist', JSON.stringify(restoredData));
      display();
    });
  });

  const deleteButtons = document.querySelectorAll('.delete-icon');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const restoredData = JSON.parse(localStorage.getItem('todolist'));
      const targetInd = e.target.getAttribute('data-index') - 1;
      restoredData.splice(targetInd, 1);
      localStorage.setItem('todolist', JSON.stringify(restoredData));
      display();
      indexSetter();
    });
  });
}
