const removeCompleted = (list, updateDisplay, updateLcSrg, updateStatus, cont) => {
  const nonComplete = list.filter(function (task) {
    if (!task.completed) {
      return task;
    };
  });

  for (let i = 0; i < nonComplete.length; i += 1) {
    nonComplete[i].index = i
  };
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