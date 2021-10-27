import './style.css';
import {updateComplation} from './updateStatus';


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
    index: 1,
  },
];

for (let i = 0; i < taskList.length; i += 1) {
  taskCont.innerHTML += `
    <div class="task">
    <input type="checkbox" class="checkbox" name="completion" id="${i}" value="completion">
      <p class="taskTitle">${taskList[i].description}</p>
    </div>`;
};

const checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', (e)=>{
    updateComplation(taskList, checkbox, e.target.id)
  });
 });