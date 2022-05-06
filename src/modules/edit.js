import display from "./display.js";

export default function edit() {
  const editForm = document.querySelectorAll(".editable-input");

  editForm.forEach((e) => {
    e.addEventListener("click", (e) => {
      let xselector = e.target;
      let parentEl = xselector.parentElement;
      parentEl.style.backgroundColor = "yellow";
      keypressEnter(parentEl);
    });

    function keypressEnter(arg) {
      arg.addEventListener("focusout", (e) => {
        const restoredData = JSON.parse(localStorage.getItem("todolist"));
        arg.style.backgroundColor = "transparent";
        arg.blur();
        restoredData[e.target.getAttribute("data-index") - 1].content =
          e.target.value;

        localStorage.setItem("todolist", JSON.stringify(restoredData));
        display();
      });
    }
  });

  let deleteButtons = document.querySelectorAll(".delete-icon");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const restoredData = JSON.parse(localStorage.getItem("todolist"));
      let targetInd = e.target.getAttribute("data-index") - 1;
      restoredData.splice(targetInd, 1);
      localStorage.setItem("todolist", JSON.stringify(restoredData));
      display();
    });
  });
}
