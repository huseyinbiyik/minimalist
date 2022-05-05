import indexSetter from "./indexSetter";
import display from "./display";
export default function clearAll(e) {
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
}
