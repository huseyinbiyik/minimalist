export default function edit() {
  const editForm = document.querySelectorAll('.editable-input');

  editForm.forEach((e) => {
    const restoredData = JSON.parse(localStorage.getItem('todolist'));
    e.addEventListener('click', (e)=>{
      console.log(e.target);
    })
    e.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.target.blur();
        restoredData[e.target.getAttribute('data-index')-1].content = e.target.value;
      }
      localStorage.setItem('todolist', JSON.stringify(restoredData));
    });
  });
}