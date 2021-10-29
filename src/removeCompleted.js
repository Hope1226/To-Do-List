const removeCompleted = (list, updateDisplay, updateLcSrg, updateStatus, cont) => {
  const nonComplete = list.filter((task) => {
    if (!task.completed) { return true; }
    return false;
  });

  for (let i = 0; i < nonComplete.length; i += 1) {
    nonComplete[i].index = i;
  }
  updateLcSrg(nonComplete);
  updateDisplay(nonComplete, cont);

  const checkboxes = document.querySelectorAll('.checkbox');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      updateStatus(nonComplete, checkbox, e.target.id);
      updateLcSrg(nonComplete);
    });
  });
};

export default removeCompleted;