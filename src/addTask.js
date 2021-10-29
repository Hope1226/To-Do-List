import updateComplation from './updateStatus.js';
import updateLocalStr from './updateLocalStorage.js';


const addTasks = (element, input, list, disFuntction) => {
  element.addEventListener('submit', (event)=>{
    event.preventDefault();
    list.push({
      description: input.value,
      completed: false,
      index: list.length,
    });
    updateLocalStr(list)
    disFuntction();

    const checkboxes = document.querySelectorAll('.checkbox');

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
        updateComplation(list, checkbox, e.target.id);
        updateLocalStr(list);
      });
    });

     element.reset()
  })
};

export default addTasks;