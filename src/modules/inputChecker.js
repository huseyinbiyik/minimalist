export default function inputChecker() {
  const toDoInputBox = document.querySelectorAll('.to-do-input');
  toDoInputBox.forEach((element) => {
    element.addEventListener('click', (e) => {
      const restoredData = JSON.parse(localStorage.getItem('todolist'));
      const targetEl = e.target;
      const targetId = targetEl.id;
      if (targetEl.checked === true) {
        restoredData[targetId].complete = true;
      } else {
        restoredData[targetId].complete = false;
      }
      localStorage.setItem('todolist', JSON.stringify(restoredData));
    });
  });
}
