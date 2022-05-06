export default function inputBoxChecker() {
  const toDoInputBox = document.querySelectorAll('.to-do-input');

  toDoInputBox.forEach((element) => {
    element.addEventListener('click', (e) => {
      const restoredData = JSON.parse(localStorage.getItem('todolist'));
      const targetEl = e.target;
      const targetId = targetEl.id;
      if (targetEl.checked === true) {
        restoredData[targetId - 1].complete = true;
      } else {
        restoredData[targetId - 1].complete = false;
      }
      localStorage.setItem('todolist', JSON.stringify(restoredData));
    });
  });
}
