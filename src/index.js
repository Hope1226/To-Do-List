import './style.css';
import addTasks from './addTask.js';
import removeCompleted from './removeCompleted.js';
import updateComplation from './updateStatus.js';
import updateDis from './updateDisplay.js';
import updateLocalStr from './updateLocalStorage.js';

const taskCont = document.querySelector('.taskContainer');
const localData = localStorage.getItem('localTasks');
const form = document.querySelector('#addTaskForm');
const intTask = document.querySelector('#inputTask');
const clearBtn = document.querySelector('#clearBtn');

let taskList = [

];

if (localData && JSON.parse(localData).length) {
  taskList = JSON.parse(localData);
  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i].completed) {
      taskCont.innerHTML += `
      <div class="task checked">
      <input type="checkbox" class="checkbox" name="completion" id="${i}" value="completion" checked>
        <p class="taskTitle">${taskList[i].description}</p>
      </div>`;
    } else {
      taskCont.innerHTML += `
      <div class="task">
      <input type="checkbox" class="checkbox" name="completion" id="${i}" value="completion">
        <p class="taskTitle">${taskList[i].description}</p>
      </div>`;
    }
  }
}

const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    updateComplation(taskList, checkbox, e.target.id);
    updateLocalStr(taskList);
  });
});

const display = () => {
  taskCont.innerHTML += `
    <div class="task">
      <input type="checkbox" class="checkbox" name="completion" id="${taskList.length - 1}" value="completion">
      <p class="taskTitle">${taskList[taskList.length - 1].description}</p>
    </div>`;
};

addTasks(form, intTask, taskList, display, updateComplation, updateLocalStr);
clearBtn.addEventListener('click', () => removeCompleted(taskList, updateDis, updateLocalStr, updateComplation, taskCont));

export default taskCont;