import indexSetter from './indexSetter.js';
import display from './display.js';

export default function clearAllCompleted(e) {
  e.preventDefault();
  let restoredData = JSON.parse(localStorage.getItem('todolist'));
  restoredData = restoredData.filter((element) => {
    if (element.complete === false) {
      return true;
    }
    return false;
  });
  localStorage.setItem('todolist', JSON.stringify(restoredData));
  indexSetter();
  display();
}
