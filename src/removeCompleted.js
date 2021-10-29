import updateDis from "./updateDisplay.js";
import updateLocalStr from './updateLocalStorage.js';
import updateComplation from './updateStatus.js';



const removeCompleted = (list) => {
  let nonComplete = list.filter((task)=>{
    if (!task.completed) {
      return true;
    }
  })

  for (let i = 0; i < nonComplete.length; i += 1) {
    nonComplete[i].index = i;
  }
  updateLocalStr(nonComplete);
  updateDis(nonComplete);

   
  const checkboxes = document.querySelectorAll('.checkbox');

  checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', (e) => {
      updateComplation(nonComplete, checkbox, e.target.id);
      updateLocalStr(nonComplete);
    });
  });
};

export default removeCompleted;