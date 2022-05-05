export default function indexSetter() {
  const restoredData = JSON.parse(localStorage.getItem('todolist'));
  function setIndex(item, index) {
    item.indexNumber = index;
  }
  restoredData.forEach(setIndex);

  localStorage.setItem('todolist', JSON.stringify(restoredData));
}