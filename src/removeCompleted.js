// import updateDis from "./updateDisplay.js";
// import updateLocalStr from './updateLocalStorage.js';
// import updateComplation from './updateStatus.js';
const removeCompleted = (list, updateDisplay, updateLcSrg, updateStatus) => {
  const nonComplete = list.filter((task) => {
    if (!task.completed) {
      return task;
    };
  });

  for (let i = 0; i < nonComplete.length; i += 1) {
    nonComplete[i].index = i;
  };
  updateLcSrg(nonComplete);
  updateDisplay(nonComplete);

  const checkboxes = document.querySelectorAll('.checkbox');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
        updateStatus(nonComplete, checkbox, e.target.id);
        updateLcSrg(nonComplete);
    });
  });
};

export default removeCompleted;