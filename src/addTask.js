const addTasks = (element, input, list, disFuntction) => {
  element.addEventListener('submit', (event)=>{
    event.preventDefault();
    list.push({
      description: input.value,
      completed: false,
      index: list.length,
    })
    disFuntction();
  
    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach(checkbox =>{
      checkbox.addEventListener('change', (e)=>{
        updateComplation(checkbox, e.target.id)
      });
     });
  
     element.reset()
  })
};

export default addTasks;