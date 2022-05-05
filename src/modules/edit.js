import display from "./display.js";

export default function edit() {
  const editForm = document.querySelectorAll(".editable-input");

  editForm.forEach((e) => {
    const restoredData = JSON.parse(localStorage.getItem("todolist"));
    e.addEventListener("click", (e) => {
      let xselector = e.target;
      let nextItem = xselector.nextElementSibling;
      let parentEl = xselector.parentElement;
      parentEl.style.backgroundColor = "yellow";

      nextItem.innerHTML = "delete_forever";
      keypressEnter();
    });
    function keypressEnter() {
      e.addEventListener("focusout", (e) => {
        let targetEL = e.target;
        let siblingSpan = targetEL.nextElementSibling;
        let parentEl = targetEL.parentElement;
        parentEl.style.backgroundColor = "transparent";
        siblingSpan.innerHTML = "more_vert";
        targetEL.blur();
        restoredData[e.target.getAttribute("data-index") - 1].content =
          e.target.value;

        localStorage.setItem("todolist", JSON.stringify(restoredData));
        display();
      });
    }
  });
}
