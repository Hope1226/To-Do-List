const addTasks = (element, input, list, disFuntction, updateStatus, updateLcSrg) => {
  element.addEventListener('submit', (event) => {
    event.preventDefault();
    list.push({
      description: input.value,
      completed: false,
      index: list.length,
    });
    updateLcSrg(list);
    disFuntction(list);

    const checkboxes = document.querySelectorAll('.checkbox');

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', (e) => {
        updateStatus(list, checkbox, e.target.id);
        updateLcSrg(list);
      });
    });

    element.reset();
  });
};

export default addTasks;