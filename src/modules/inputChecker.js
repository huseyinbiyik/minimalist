export default function inputChecker() {
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
