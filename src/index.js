import './style.css';
import { updateComplation } from './updateStatus';
import { updateLocalStr } from './updateLocalStorage';


const taskCont = document.querySelector('.taskContainer');
const localData = localStorage.getItem('localTasks');

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

if(localData){
  let localList = JSON.parse(localData);
  for (let i = 0; i < localList.length; i += 1) {
    if(localList[i].completed){
    taskCont.innerHTML += `
      <div class="task checked">
      <input type="checkbox" class="checkbox" name="completion" id="${i}" value="completion" checked>
        <p class="taskTitle">${localList[i].description}</p>
      </div>`;
    } else {
      taskCont.innerHTML += `
      <div class="task">
      <input type="checkbox" class="checkbox" name="completion" id="${i}" value="completion">
        <p class="taskTitle">${localList[i].description}</p>
      </div>`;
    };
  };
}
else {
for (let i = 0; i < taskList.length; i += 1) {
  taskCont.innerHTML += `
    <div class="task">
    <input type="checkbox" class="checkbox" name="completion" id="${i}" value="completion">
      <p class="taskTitle">${taskList[i].description}</p>
    </div>`;
  };
};

const checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', (e)=>{
    updateComplation(taskList, checkbox, e.target.id);
    updateLocalStr(taskList);
  });
 });
 