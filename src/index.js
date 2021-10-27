import './style.css';

const taskCont = document.querySelector('.taskContainer');

const taskList = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete to Do list project',
    completed: false,
    index: 0,
  },
];

for (let i = 0; i < taskList.length; i += 1){
  taskCont.innerHTML += `
    <div class="task">
      <span class="checkbox"></span>
      <p class="taskTitle">${taskList[i].description}</p>
    </div>`
};