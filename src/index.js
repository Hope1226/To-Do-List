import MoreIcon from './more-icon.svg';
import './style.css';

// const moreIcon = new Image();
// moreIcon.src = MoreIcon;

const taskCont = document.querySelector('.taskContainer');

const taskList = [
  {
    description: "Wash the dishes",
    completed: false,
    index: 0
  },
  {
    description: "Complete to Do list project",
    completed: false,
    index: 0
  }
];

for(let i = 0; i < taskList.length; i++){
  taskCont.innerHTML += `
    <div class="task">
      <span class="checkbox"></span>
      <p class="taskTitle">${taskList[i].description}</p>
    </div>`
}